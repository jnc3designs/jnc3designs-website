import {
  productionMaterials,
  getProductionMaterial,
}from "../data/productionMaterials.js";

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

export function getPrinterCapabilities(
  printer
) {
  if (!printer) {
    return null;
  }

  return {
    nozzleSize:
      Number(
        printer.capabilities?.nozzleSize
      ) || null,

    nozzleType:
      printer.capabilities?.nozzleType ||
      null,

    amsCount:
      Number(
        printer.capabilities?.amsCount
      ) || 0,

    materials:
      Array.isArray(
        printer.capabilities?.materials
      )
        ? printer.capabilities.materials
        : [],
  };
}

export function canPrinterUseMaterial(
  printer,
  materialName
) {
  const material =
    getProductionMaterial(materialName);

  if (!material) {
    return {
      compatible: false,
      reason: `Unknown production material: ${materialName}`,
    };
  }

  const capabilities =
    getPrinterCapabilities(printer);

  if (!capabilities) {
    return {
      compatible: false,
      reason: "Printer not found.",
    };
  }

  const supportedMaterials =
    capabilities.materials.map(
      normalizeText
    );

  const compatible =
    supportedMaterials.includes(
      normalizeText(material.name)
    );

  return {
    compatible,
    reason: compatible
      ? `${printer.name} supports ${material.name}.`
      : `${printer.name} is not configured for ${material.name}.`,
  };
}

export function canPrinterRunJob(
  printer,
  job
) {
  if (!printer) {
    return {
      compatible: false,
      reasons: ["Printer not found."],
    };
  }

  if (!job) {
    return {
      compatible: false,
      reasons: ["Production job not found."],
    };
  }

  const reasons = [];

  if (job.material) {
    const materialCheck =
      canPrinterUseMaterial(
        printer,
        job.material
      );

    if (!materialCheck.compatible) {
      reasons.push(materialCheck.reason);
    }
  }

  if (job.nozzleSize) {
    const printerNozzle =
      Number(
        printer.capabilities?.nozzleSize
      );

    const requiredNozzle =
      Number(job.nozzleSize);

    if (
      printerNozzle !== requiredNozzle
    ) {
      reasons.push(
        `${printer.name} has a ${printerNozzle}mm nozzle; job requires ${requiredNozzle}mm.`
      );
    }
  }

  if (job.amsRequired) {
    const amsCount =
      Number(
        printer.capabilities?.amsCount
      ) || 0;

    if (amsCount < 1) {
      reasons.push(
        `${printer.name} does not have an AMS configured.`
      );
    }
  }

  return {
    compatible: reasons.length === 0,
    reasons,
  };
}

export function getKnownProductionMaterials() {
  return [...productionMaterials];
}
