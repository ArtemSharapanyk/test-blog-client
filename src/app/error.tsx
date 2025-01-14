"use client"

import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/Alert";
import { Button } from "@/shared/ui/Button";

export default function ErrorPage({reset}: {reset: () => void}) {
    return (
        <div className="wrapper"> 
            <Alert  variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something want wrong, please try again.</AlertDescription>
                <Button className="mt-[20px]" onClick={reset}>Try again</Button>
            </Alert>
        </div>
    );
}