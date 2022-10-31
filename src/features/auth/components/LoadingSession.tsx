import Image from "next/future/image";
import { GalaxyBackground } from "@/features/galaxy";

export const LoadingSessionOverlay = () => {
  return (
    <div className="fixed inset-0 top-0 z-20 grid h-screen place-items-center">
      <div className="h-40 w-40">
        <Image
          src="/rocket.gif"
          width={512}
          height={512}
          alt="Animated rocket"
          className="relative z-40"
        />
        <GalaxyBackground />
      </div>
    </div>
  );
};
