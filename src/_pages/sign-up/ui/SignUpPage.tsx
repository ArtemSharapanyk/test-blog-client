import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/Card"
import { SignUpForm } from "@/widgets/sign-up-form"

export const SignUpPage = () => {
  return (
    <Card className="w-[400px]  mx-auto ">
      <CardHeader className="mb-[5px]">
        <CardTitle className="text-center">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
  )
}
