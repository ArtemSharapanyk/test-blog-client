/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { FC, HTMLAttributes, PropsWithChildren } from "react";
import { Alert, AlertDescription, AlertTitle } from "./Alert";

interface ErrorAlertProps extends HTMLAttributes<HTMLDivElement> {}

export const ErrorAlert: FC<PropsWithChildren<ErrorAlertProps>> = ({
  children,
  ...props
}) => {
  return (
    <Alert {...props} variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};
