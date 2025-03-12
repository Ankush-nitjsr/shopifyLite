import { lazy, Suspense } from "react";

// Lazy load the LandingPage component
const LandingPage = lazy(() =>
  import("../components/landing-page/LandingPage")
);

const HomePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LandingPage />
    </Suspense>
  );
};

export default HomePage;
