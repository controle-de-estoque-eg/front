import Lottie from "lottie-react";
import animation_404 from "@/assets/404.json";

export function NotPageFound() {
  return (
    <section className="flex flex-col items-center justify-center pt-32">
      <h1 className="text-6xl">Pagina não encontrada</h1>
      <Lottie animationData={animation_404} className="w-1/3" />
    </section>
  );
}
