import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNumItems, getTotalPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const numItems = useSelector(getNumItems);
  const totalPrice = useSelector(getTotalPrice);

  if (numItems > 0) {
    return (
      <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
        <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
          <span>{numItems} pizzas</span>
          <span>{formatCurrency(totalPrice)} </span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
    );
  } else {
    return null;
  }
}

export default CartOverview;
