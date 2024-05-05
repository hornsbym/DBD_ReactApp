import { BsBoxArrowUpRight } from "react-icons/bs";

const navbuttonClasses = `
  flex 
  px-4 
  items-center 
  text-darkBlue 
  hover:border-darkBlue 
  hover:border-b-[2px]
  hover:no-underline 
  hover:text-darkBlue
`;

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="flex flex-row justify-between">
        <div className="flex w-[5rem] sm:w-[7rem] ml-2">
          <a href="/">
            <img
              src={"/dbd_logo.png"}
              className="img-responsive"
              alt="The Dinners by Derek logo"
            />
          </a>
        </div>
        <div className="hidden md:flex md:flex-row">
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
          <a className={`${navbuttonClasses}`} href="/how-it-works">
            How It Works
          </a>
        </div>
      </div>
    </nav>
  );
}
