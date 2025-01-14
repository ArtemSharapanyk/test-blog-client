
import { CardContent, CardHeader, CardTitle, Card } from "@/shared/ui/Card"
import { SignInForm } from "@/widgets/sign-in-form"

export const SignInPage = () => {
  return (
    <Card className="w-[400px]  mx-auto  ">
      <CardHeader className="mb-[5px]">
        <CardTitle className="text-center">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
    </Card>
  )
}
