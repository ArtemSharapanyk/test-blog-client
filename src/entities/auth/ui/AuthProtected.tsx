import { FC, PropsWithChildren } from "react";
import { auth } from "../../../../auth-methods";
import { Alert, AlertTitle } from "@/shared/ui/Alert";

export const AuthProtected: FC<PropsWithChildren> = async ({ children }) => {
  const session = await auth();

  if (!session) return (
      <div className="wrapper">
        <Alert>
          <AlertTitle>
            Not authenticated
          </AlertTitle>
        </Alert>
      </div>
    );


  return <>{children}</>;
};
