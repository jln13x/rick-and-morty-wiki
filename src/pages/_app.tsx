import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { Navbar } from "@/features/navbar";
import { Galaxy } from "@/features/galaxy";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="relative z-20">
        <Navbar />
        <Component {...pageProps} />
      </div>
      <Galaxy />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
