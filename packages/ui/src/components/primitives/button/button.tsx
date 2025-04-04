import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";
import { buttonVariants } from "./button-variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  uppercase?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "link" | "input";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, uppercase, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <>
        <Comp
          className={cn(
            buttonVariants({ variant, size, className }),
            uppercase && "uppercase",
          )}
          ref={ref}
          {...props}
        />
      </>
    );
  },
);
Button.displayName = "Button";

export { Button };
