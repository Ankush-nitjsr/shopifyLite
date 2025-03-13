import { lazy, Suspense } from "react";

const Header = lazy(() => import("../components/Header/Header"));
const Account = lazy(() => import("../components/account/Account"));

/**
 * AccountPage component that lazy loads the Header and Account components.
 *
 * Uses React's Suspense to display a fallback message while loading
 * the components asynchronously.
 *
 * @component
 * @example
 * return <AccountPage />;
 */

const AccountPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Account />
    </Suspense>
  );
};

export default AccountPage;
