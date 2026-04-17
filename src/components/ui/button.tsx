import { cn } from "../../lib/utils";

export const Button = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-xl bg-black text-white hover:opacity-90 transition",
        className,
      )}
      {...props}
    />
  );
};
