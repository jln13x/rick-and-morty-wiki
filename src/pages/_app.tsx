import { SessionProvider } from "@/features/auth";
import { Navbar } from "@/features/navbar/components";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import "../styles/globals.css";
import { trpc } from "@/features/trpc/trpc-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import dynamic from "next/dynamic";

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <div className="relative h-full text-white">
      <div className="relative z-20 h-screen overflow-auto">
        <SessionProvider session={session}>
          <header className="min-h-[10%]">
            <Navbar />
          </header>
          <main className="h-[90%] py-20">
            <Component {...pageProps} />
          </main>
        </SessionProvider>
      </div>
      <LazyGalaxy />
      <ReactQueryDevtools />
    </div>
  );
};

const LazyGalaxy = dynamic(() => import("@/features/galaxy/Galaxy"));

export default trpc.withTRPC(App);
