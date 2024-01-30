import { Button } from "./";
import {
  DialogRoot,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./primitives/dialog";

export type DialogProps = React.PropsWithChildren & {
  triggerText: string;
  title?: string;
  description?: string;
  submitText?: string;
  cancelText?: string;
  onSubmit?: () => void;
};

export function Dialog(props: DialogProps) {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="outline">{props.triggerText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription>{props.description}</DialogDescription>
        </DialogHeader>
        {props.children}
        <DialogFooter className="flex gap-x-1 md:justify-around">
          {props.cancelText && (
            <Button className="w-1/2" variant="destructive" type="reset">
              {props.cancelText}
            </Button>
          )}

          <Button
            className="w-1/2"
            onClick={() => props.onSubmit?.()}
            type="submit"
          >
            {props.submitText ?? "Confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
