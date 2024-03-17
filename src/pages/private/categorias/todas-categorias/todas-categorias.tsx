import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import box from "@/assets/box.png";
import { Skeleton } from "@/components/ui/skeleton";
import { useTodasCategorias } from "@/hooks/queries/useTodasCategorias";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CategoriaValidator } from "@/common/validator/categoria/categoria-validator";
import { EditarCategoria } from "../editar-categoria/editar-categoria";

export const TodasCategorias = () => {
  const { todasCategorias } = useTodasCategorias();
  const [select, seSelect] = useState<CategoriaValidator>();

  return (
    <section className="flex justify-center pt-1">
      <div className="w-1/2 flex flex-col gap-2 px-4">
        {todasCategorias.isLoading ? (
          <SkeletonCategorias />
        ) : (
          todasCategorias.data?.map((categoria) => (
            <Card
              key={categoria.id}
              className={cn("p-6 flex gap-4 cursor-pointer", {
                "bg-muted ring-1 ring-primary": select?.id === categoria.id,
              })}
              onClick={() => {
                seSelect(categoria);
              }}
            >
              <img src={box} className="w-16 h-16" />
              <div className="space-y-2">
                <p className="w-96 h-4">{categoria.nome}</p>
                <p className="w-96 h-4">{categoria.descricao}</p>
                <div className="w-96 h-4"></div>
              </div>
            </Card>
          ))
        )}
      </div>

      <div className="min-h-screen">
        <Separator orientation="vertical" />
      </div>

      <div className="w-1/2 px-4">
        {select && <EditarCategoria {...select} />}
      </div>
    </section>
  );
};

const SkeletonCategorias = () => {
  return [1, 2, 3, 4, 5, 6, 7].map((i) => (
    <Card key={i} className="p-6 flex gap-4">
      <Skeleton className="w-16 h-16" />
      <div className="space-y-2">
        <Skeleton className="w-96 h-4" />
        <Skeleton className="w-96 h-4" />
        <Skeleton className="w-96 h-4" />
      </div>
    </Card>
  ));
};
