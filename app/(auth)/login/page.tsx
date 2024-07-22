// page.tsx
import FormLogin from "@/app/ui/login-form";

const LoginPage = ({
  searchParams,
}: {
  searchParams: { verified: string; error: string };
}) => {
  const isVerified = searchParams.verified === "true";
  const OAuthAccountNotLinked = searchParams.error === "OAuthAccountNotLinked";

  return (
    <FormLogin
      isVerified={isVerified}
      OAuthAccountNotLinked={OAuthAccountNotLinked} // Ahora esta propiedad es válida
    />
  );
};
export default LoginPage;