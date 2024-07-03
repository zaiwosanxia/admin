import { useRoutes } from "react-router-dom";
import router from "./baseRouter";

export default function RouterView() {
    const element = useRoutes(router);
  return (
    <>{ element }</>
  )
}
