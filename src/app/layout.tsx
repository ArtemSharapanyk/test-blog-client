
import "./globals.css";
import { Navigation } from "@/widgets/navigation/ui/Navigation";
import { AuthProvider } from "./providers/AuthProvider";
import { HandleClientTokenProvider } from "./providers/HandleClientTokenProvider";
import { UserActionMenu } from "@/widgets/user-action-menu";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <HandleClientTokenProvider>
            <Navigation>
              <UserActionMenu />
            </Navigation>
            <main className="py-[20px] relative">{children}</main>
          </HandleClientTokenProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
