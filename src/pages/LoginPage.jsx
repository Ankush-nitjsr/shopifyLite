import { lazy, Suspense } from "react";

const Header = lazy(() => import("../components/Header/Header"));
const LoginForm = lazy(() => import("../components/login/LoginForm"));

/**
 * LoginPage component renders the login page with a header and a login form.
 * It uses React's Suspense to display a fallback loading indicator while the components are being loaded.
 *
 * @component
 * @example
 * return (
 *   <LoginPage />
 * )
 */

function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gray-100">
        <LoginForm />
      </div>
    </Suspense>
  );
}

export default LoginPage;
