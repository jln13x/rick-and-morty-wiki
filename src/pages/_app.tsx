import { SessionProvider } from "@/features/auth";
import { Galaxy } from "@/features/galaxy";
import { Navbar } from "@/features/navbar";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import "../styles/globals.css";
import { trpc } from "../utils/trpc";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <div className="relative h-full text-white">
      <div className="relative z-20 h-screen overflow-auto">
        <SessionProvider session={session}>
          <header className="h-[10%]">
            <Navbar />
          </header>
          <main className="h-[90%] py-20">
            <Component {...pageProps} />
          </main>
        </SessionProvider>
      </div>
      <Galaxy />
      <ReactQueryDevtools />
    </div>
  );
};

export default trpc.withTRPC(App);
