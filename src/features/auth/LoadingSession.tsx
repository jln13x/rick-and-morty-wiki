import Image from "next/future/image";

export const LoadingSession = () => {
  return (
    <div className="z-20 grid h-screen place-items-center">
      <div className="h-40 w-40">
        <Image
          src="/rocket.gif"
          width={512}
          height={512}
          alt="Animated rocket"
        />
      </div>
    </div>
  );
};
