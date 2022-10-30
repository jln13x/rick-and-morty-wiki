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
    <div className="relative min-h-screen text-white">
      <div className="relative z-20">
        <SessionProvider session={session}>
          <header>
            <Navbar />
          </header>
          <main className="py-20">
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
