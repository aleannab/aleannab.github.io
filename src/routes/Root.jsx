import { Outlet, Link } from "react-router-dom";
import Navigation from '../components/Navigation'

const Root = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Root;