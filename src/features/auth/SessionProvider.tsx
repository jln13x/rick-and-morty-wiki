import { trpc } from "@/utils/trpc";
import { Session } from "next-auth";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { LoadingSessionOverlay } from "./LoadingSession";

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

  const session = sessionFromProps ? sessionFromProps : sessionFromQuery;

  return (
    <NextAuthSessionProvider session={session}>
      {children}
      {isLoadingSession && <LoadingSessionOverlay />}
    </NextAuthSessionProvider>
  );
};
