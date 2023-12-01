import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link className="tracking-widest" to="/">
        Fast React Pizze Co.
      </Link>
      <Username />
      <SearchOrder />
    </header>
  );
};

export default Header;
