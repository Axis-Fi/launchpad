import { Button, UsdToggle, cn } from "@repo/ui";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type PageHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  backNavigationPath?: string;
  backNavigationText?: string;
  toggle?: boolean;
  toggleSymbol?: string;
};

export function PageHeader({
  className,
  backNavigationPath,
  backNavigationText = "Back to Launches",
  children,
  toggle,
  toggleSymbol = "Quote",
}: PageHeaderProps) {
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        "grid w-full grid-cols-2 grid-rows-2 items-center justify-between justify-items-center gap-y-4 lg:my-5 lg:mt-2 lg:flex lg:justify-between",
        className,
      )}
    >
      <Button
        size="icon"
        className="row-start-1 lg:w-1/5"
        variant="ghost"
        //@ts-expect-error interesting TS quirk below,
        //both string and number are valid but on different signatures
        onClick={() => navigate(backNavigationPath ?? -1)}
      >
        <div className="relative -ml-4">
          <ArrowLeft className="absolute -left-7" />
          {backNavigationText}
        </div>
      </Button>
      <div className="col-span-2 row-start-2 mx-auto ">{children}</div>

      <div className="flex w-full items-center justify-end lg:w-1/5 lg:pr-0">
        {toggle && <UsdToggle currencySymbol={toggleSymbol} />}
      </div>
    </div>
  );
}
