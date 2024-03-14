import { Layout } from "@/pages/layout";
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  // component: () => {
  //   return (
  //     <>
  //       <div className="p-2 flex gap-2">
  //         <Link to="/" className="[&.active]:font-bold">
  //           Home
  //         </Link>{" "}
  //         <Link to="/login" className="[&.active]:font-bold">
  //           About
  //         </Link>
  //       </div>
  //       <hr />
  //       <Outlet />
  //
  //     </>
  //   );
  // },
  component: Layout,
});
