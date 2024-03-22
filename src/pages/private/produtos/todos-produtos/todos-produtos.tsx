import { ProdutoValidator } from "@/common/validator/produto/produto-validator";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useTodosProdutos } from "@/hooks/queries/useTodoProdutos";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import box from "@/assets/box.png";
import { EditarProduto } from "../editar-produto/editar-produto";

export const TodosProdutos = () => {
  const { todosProdutos } = useTodosProdutos();
  const [select, seSelect] = useState<ProdutoValidator>();

  useEffect(() => {
    console.log(todosProdutos.data);
  }, [todosProdutos.data]);

  return (
    <section className="flex justify-center pt-1">
      <div className="w-1/2 flex flex-col gap-2 px-4">
        {todosProdutos.isLoading ? (
          <SkeletonProdutos />
        ) : (
          todosProdutos.data?.map((produto) => (
            <Card
              key={produto.id}
              className={cn("p-6 flex gap-4 cursor-pointer", {
                "bg-muted ring-1 ring-primary": select?.id === produto.id,
              })}
              onClick={() => {
                seSelect(produto);
              }}
            >
              <img src={box} className="w-16 h-16" />
              <div className="space-y-2">
                <p className="w-96 h-4">{produto.nome}</p>
                <p className="w-96 h-4">{produto.descricao}</p>
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
        {select && <EditarProduto {...select} />}
      </div>
    </section>
  );
};

const SkeletonProdutos = () => {
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
