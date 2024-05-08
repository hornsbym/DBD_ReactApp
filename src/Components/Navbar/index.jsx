import { useState } from "react";
import { BsBoxArrowUpRight, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";

const navbuttonClasses = `
  flex 
  px-4 
  items-center 
  text-darkBlue 
  text-xs
  font-bold
  sm:text-base
  hover:border-darkBlue 
  hover:border-b-[2px]
  hover:no-underline 
`;

export default function Navbar() {
  // eslint-disable-next-line no-undef
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="flex flex-row justify-between">
        <div className="flex w-[5rem] sm:w-[7rem] ml-2">
          <a href="/" onClick={() => setIsExpanded(false)}>
            <img
              src={"/dbd_logo.png"}
              className="img-responsive"
              alt="The Dinners by Derek logo"
            />
          </a>
        </div>
        <div className="flex flex-row mr-4">
          <a
            className={`${navbuttonClasses}`}
            href="https://dinnersbyderek.bottle.com/"
            target="__blank"
          >
            <div className={`flex flex-row gap-2 items-center`}>
              Order Now
              <BsBoxArrowUpRight />
            </div>
          </a>
          <div className="hidden md:flex md:flex-row">
            <Link className={`${navbuttonClasses}`} to="/how-it-works">
              How It Works
            </Link>
            <Link className={`${navbuttonClasses}`} to="/faqs">
              FAQ's
            </Link>
          </div>
          <div className={`md:!hidden ${navbuttonClasses} hover:cursor-pointer`} onClick={() => setIsExpanded(!isExpanded)}>
            <span className={`flex flex-row items-center gap-2`}>More {isExpanded ? <BsChevronUp />: <BsChevronDown />}</span>
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="relative md:hidden flex flex-col">
          <Link className={`${navbuttonClasses} p-8 w-full justify-center`} onClick={() => setIsExpanded(false)} to="/how-it-works">
            How It Works
          </Link>
          <Link className={`${navbuttonClasses} p-8 w-full justify-center`} onClick={() => setIsExpanded(false)} to="/faqs">
            FAQ's
          </Link>
        </div>
      )}
    </nav>
  );
}
