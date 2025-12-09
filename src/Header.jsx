import logo from "./assets/svgs/logo.svg";
import ring from "./assets/svgs/ring.svg";
import moonImg from "./assets/icons/moon.svg";
import shoppingCart from "./assets/svgs/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetails from "./cine/CartDetails";
import { MovieContext } from "./contexts";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);

  console.log(cartData);

  const handleCartShow = () => {
    setShowCart(true);
  };

  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between gap-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="Website Logo" />
        </a>

        <ul className="flex items-center gap-5">
          <li>
            <button className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-1 inline-block cursor-pointer">
              <img src={ring} width="24" height="24" alt="Ring/Bell Icon" />
            </button>
          </li>
          <li>
            <button className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-1 inline-block cursor-pointer">
              <img src={moonImg} width="24" height="24" alt="" />
            </button>
          </li>
          <li>
            <button
              className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-1 inline-block cursor-pointer"
              onClick={handleCartShow}
            >
              <img
                src={shoppingCart}
                width="24"
                height="24"
                alt="Shopping Cart"
              />
              {cartData.length > 0 && (
                <span className="rounded-full absolute -top-3 left-7 bg-[#12cf6f] text-white text-center p-0.5 w-[30px] h-[30px] font-semibold">
                  {cartData.length}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
