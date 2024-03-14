import { Button } from "@/components/ui/button";
import { useBearsStore } from "@/store/useBearsStore";
import { Toaster, toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

export function Index() {
  const { bears, removeAllBears, increasePopulation } = useBearsStore();

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Toaster />
      <ThemeToggle />
      <Button
        onClick={() => {
          toast.error("remove All Bears");
          removeAllBears();
        }}
      >
        remove All Bears
      </Button>
      <div className="px-6 my-6">
        <Badge>Bears: {bears}</Badge>
      </div>
      <Button
        onClick={() => {
          toast.success("increase Population");
          increasePopulation();
        }}
      >
        increase Population
      </Button>
    </div>
  );
}
