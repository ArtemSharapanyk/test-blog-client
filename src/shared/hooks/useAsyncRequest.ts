import { useCallback, useMemo, useState } from "react";

type AsyncCallback<TArgs extends unknown[], TResult> = (
  ...args: TArgs
) => Promise<TResult>;

export const useAsyncRequest = <TArgs extends unknown[], TResult>(
  callback: AsyncCallback<TArgs, TResult>,
  redirect?: () => void
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<TResult | null | Error>(null);
  const [data, setData] = useState<TResult | null>(null);

  const request = useCallback(
    async (...args: TArgs) => {
      try {
        setLoading(true);
        const response = await callback(...args);

        // @ts-expect-error stripe type error
        if (response.error) {
          setLoading(false);
          setData(null);
          // @ts-expect-error stripe type error
          setError(response.error);
          return;
        }

        setLoading(false);
        setData(response);
        setError(null);
        redirect?.();
      } catch (error) {
        setLoading(false);
        setError(error as Error);
      }
    },
    [callback]
  );

  const returnValue = useMemo(
    () => ({ loading, request, error, data }),
    [data, error, loading, request]
  );

  return returnValue;
};
