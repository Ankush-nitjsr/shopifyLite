import Header from "../components/Header/Header";
import { LoginForm } from "../components/login/LoginForm";

function LoginPage() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col justify-center items-center w-full max-w-md">
          <LoginForm />
        </div>
      </main>
    </>
  );
}

export default LoginPage;
