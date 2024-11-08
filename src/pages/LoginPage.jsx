import Header from "../components/Header/Header";
import { LoginForm } from "../components/login/LoginForm";

function LoginPage() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gray-100">
        <LoginForm />
      </div>
    </>
  );
}

export default LoginPage;
