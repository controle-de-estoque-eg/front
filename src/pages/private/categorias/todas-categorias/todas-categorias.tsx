import { useTodasCategorias } from "@/hooks/queries/useTodasCategorias";
import { useEffect } from "react";

export const TodasCategorias = () => {
  const { todasCategorias } = useTodasCategorias();

  useEffect(() => {
    console.log(todasCategorias.data);
  }, [todasCategorias.data]);

  return <div>todas-categorias</div>;
};
