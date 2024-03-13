import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";

export function About() {
  return (
    <div className="p-2">
      <h1>Hello from About!</h1>
      <Toaster />
      <Button onClick={() => toast("About")}>About</Button>
    </div>
  );
}
