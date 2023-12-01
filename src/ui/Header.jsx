import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">Fast React Pizze Co.</Link>
      <p>ABABB</p>
      <SearchOrder />
    </header>
  );
};

export default Header;
