import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link className="tracking-widest" to="/">
        Fast React Pizze Co.
      </Link>
      <Username />
      <SearchOrder />
    </header>
  );
};

export default Header;
