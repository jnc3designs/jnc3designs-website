"use client";

import { useClerk } from "@clerk/nextjs";

export default function OwnerSignOut() {
  const { signOut } = useClerk();

  async function handleSignOut() {
    await signOut({
      redirectUrl: "/",
    });
  }

  return (
    <button
      type="button"
      className="owner-signout-button"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
}