import { useState } from "react";
import Button from "../UI/Button";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Navbar = ({ isContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`md:fixed top-0 w-full bg-[#150e28] z-40 text-white px-6 md:px-24 py-4 md:py-0 md:pt-10 md:pb-4 ${
        isContact ? "hidden md:flex" : ""
      } flex items-center justify-between border-b border-[#ffffff10]`}
    >
      <Link
        to="/"
        className=" font-bold text-2xl font-['Clash_Display'] tracking-wide"
      >
        get<span className=" text-[#D434FE]">linked</span>
      </Link>
      <div
        className={`${
          menuOpen ? "translate-x-0" : " translate-x-full"
        } fixed flex gap-4 p-12 pt-24 md:p-0 top-0 left-0 h-[50vh] w-full bg-[#150e28] z-10 flex-col md:static md:flex-row md:items-center md:justify-between md:w-3/5 md:h-0 md:translate-x-0 transition duration-1000 delay-100 `}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className=" z-50 block md:hidden absolute top-8 right-8 border border-[#D434FE] rounded-full"
        >
          <Icon icon="uil:times" color="whitesmoke" width="20" />
        </div>

        <a
          href="/#timeline"
          className=" hover:text-[#D434FE] transition ease-in duration-750 text-sm"
        >
          Timeline
        </a>
        <a
          href="/#overview"
          className=" hover:text-[#D434FE] transition ease-in duration-750 text-sm"
        >
          Overview
        </a>
        <a
          href="#faqs"
          className=" hover:text-[#D434FE] transition ease-in duration-750 text-sm"
        >
          FAQS
        </a>
        <Link
          to="/contact"
          className=" hover:text-[#D434FE] transition ease-in duration-750 text-sm pr-14"
        >
          Contact
        </Link>
        <Link to="/register">
          <Button text={"Register"} />
        </Link>
      </div>
      
      <div className=" absolute right-0 md:hidden" onClick={() => setMenuOpen(true)}>
        <Icon icon="jam:menu" color="whitesmoke" width="40" />
      </div>
    </nav>
  );
};

export default Navbar;
