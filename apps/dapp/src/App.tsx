import { Providers } from "./context/providers";
import { Outlet } from "react-router-dom";
import { AppFooter } from "modules/app/app-footer";
import { AppHeader } from "modules/app/app-header";
import ScrollToTop from "modules/app/scroll-to-top";
import { ReferrerChecker } from "modules/app/referrer-checker";

function App() {
  return (
    <Providers>
      <ScrollToTop />
      <ReferrerChecker />
      <div className="mx-auto flex h-dvh max-w-[1340px] flex-col justify-between px-4">
        <div>
          <AppHeader />
          <div className="mx-auto mt-10 w-full max-w-[1258px]">
            <Outlet />
          </div>
        </div>
        <AppFooter />
      </div>
    </Providers>
  );
}

export default App;
