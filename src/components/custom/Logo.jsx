import { cn } from "@/lib/utils";

function Logo({size="small"}) {
  const sizes = {
    small: "text-xl",
    medium: "text-3xl",
    large: "text-4xl"
  }

  return (
    <div className={cn("font-bold text-xl font-heading", sizes[size])}>
      <h1>
        GradeIQ
      </h1>
    </div>
  );
}

export default Logo;