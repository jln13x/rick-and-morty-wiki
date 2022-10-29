import { trpc } from "@/utils/trpc";
import { Session } from "next-auth";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import Image from "next/future/image";
import { useEffect, useState } from "react";
import { LoadingSession } from "./LoadingSession";

interface Props {
  session: Session | null;
  children: React.ReactNode;
}

export const SessionProvider = ({
  session: sessionFromProps,
  children,
}: Props) => {
  const { data: sessionFromQuery, isLoading: isLoadingSession } =
    trpc.auth.getSession.useQuery(undefined, {
      enabled: !sessionFromProps,
    });

  // Show a loading component to prevent components popping in (e.g. the favorite mark or the logout button)
  if (isLoadingSession) return <LoadingSession />;

  const session = sessionFromProps ? sessionFromProps : sessionFromQuery;

  return (
    <NextAuthSessionProvider session={session}>
      {children}
    </NextAuthSessionProvider>
  );
};
