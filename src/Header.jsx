import logo from "./assets/svgs/logo.svg";
import ring from "./assets/svgs/ring.svg";
import moonImg from "./assets/icons/moon.svg";
import shoppingCart from "./assets/svgs/shopping-cart.svg";

export default function Header() {
  return (
    <header>
      <nav className="container flex items-center justify-between gap-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="Website Logo" />
        </a>

        <ul className="flex items-center gap-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="Ring/Bell Icon" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={moonImg} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={shoppingCart}
                width="24"
                height="24"
                alt="Shopping Cart"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
