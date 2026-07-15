import { UserButton } from "@clerk/nextjs";
import Badge from "./Badge";
import OwnerSignOut from "./OwnerSignOut";

export default function MissionControlHero() {
  return (
    <section className="mission-control-hero">
      <div className="mission-control-topbar">
        <Badge color="blue">🚀 JNC OS</Badge>

        <div className="mission-owner-controls">
          <UserButton />

          <OwnerSignOut />
        </div>
      </div>

      <h1>Mission Control</h1>

      <p>
        Welcome to the operational heartbeat of JNC3Designs. Monitor your print
        farm, prioritize today&apos;s work, and keep your business moving
        forward.
      </p>

      <div className="mission-values">
        <span>⚒️ Build Once.</span>
        <span>♾️ Improve Forever.</span>
        <span>🧠 The Platform Remembers.</span>
      </div>
    </section>
  );
}