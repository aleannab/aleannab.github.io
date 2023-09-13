import { Outlet, Link } from "react-router-dom";
import Navigation from '../components/Navigation'

const Root = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Root;