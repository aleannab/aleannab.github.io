import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Outlet />
    </div>
  );
}

export default Root;