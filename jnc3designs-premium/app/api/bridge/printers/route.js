import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

const PRINTER_STATE_KEY = "jnc:bridge:printers";

function isBridgeAuthorized(request) {
  const configuredKey = process.env.JNC_BRIDGE_API_KEY;
  const providedKey = request.headers.get("x-jnc-bridge-key");

  return Boolean(
    configuredKey &&
      providedKey &&
      providedKey === configuredKey
  );
}

export async function POST(request) {
  if (!isBridgeAuthorized(request)) {
    return NextResponse.json(
      {
        status: "unauthorized",
        message: "Invalid or missing Bridge key.",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const payload = await request.json();

    if (
      !payload ||
      !Array.isArray(payload.printers)
    ) {
      return NextResponse.json(
        {
          status: "invalid_request",
          message:
            "Request body must contain a printers array.",
        },
        {
          status: 400,
        }
      );
    }

    const state = {
      version: payload.version || "1.0",
      timestamp:
        payload.timestamp ||
        new Date().toISOString(),
      receivedAt: new Date().toISOString(),
      printers: payload.printers,
    };

    await redis.set(PRINTER_STATE_KEY, state);

    return NextResponse.json(
      {
        status: "accepted",
        receivedAt: state.receivedAt,
        printerCount: state.printers.length,
      },
      {
        status: 202,
      }
    );
  } catch (error) {
    console.error(
      "Unable to store Bridge printer state:",
      error
    );

    return NextResponse.json(
      {
        status: "error",
        message:
          "Unable to store Bridge printer state.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    const state = await redis.get(
      PRINTER_STATE_KEY
    );

    if (!state) {
      return NextResponse.json(
        {
          status: "unavailable",
          message:
            "No live printer state has been received yet.",
          printers: [],
        },
        {
          status: 503,
        }
      );
    }

    return NextResponse.json(state, {
      status: 200,
      headers: {
        "Cache-Control":
          "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error(
      "Unable to read Bridge printer state:",
      error
    );

    return NextResponse.json(
      {
        status: "error",
        message:
          "Unable to read Bridge printer state.",
        printers: [],
      },
      {
        status: 500,
      }
    );
  }
}
