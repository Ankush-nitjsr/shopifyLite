import { lazy, Suspense } from "react";

// Lazy load the LandingPage component
const LandingPage = lazy(() =>
  import("../components/landing-page/LandingPage")
);

/**
 * HomePage component
 *
 * This component serves as the main landing page of the application.
 * It uses React's Suspense to lazily load the LandingPage component,
 * displaying a loading indicator while the component is being loaded.
 *
 * @component
 * @example
 * return (
 *   <HomePage />
 * )
 */

const HomePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LandingPage />
    </Suspense>
  );
};

export default HomePage;
