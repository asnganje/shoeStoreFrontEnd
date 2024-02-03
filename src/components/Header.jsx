import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import shoeLogo from "../assets/shoes.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";

const data = [
  { id: nanoid(), text: "Products", route: "/products" },
  { id: nanoid(), text: "Stores", route: "/store" },
];
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logOutHandler = () => {};

  const toggleNav = () => {
    setIsNavOpen(true);
  };

  const handleReToggle = () => {
    setIsNavOpen(false);
  };

  const handleHeaderItemClick = () => {};

  const renderedHeaderItems = data.map((item) => {
    return (
      <li
        key={item.id}
        onClick={() => handleHeaderItemClick(item.id)}
        className="text-orange-400 cursor-pointer p-1 text-xl hover:bg-blue-500 hover:rounded-md hover:text-white"
      >
        {item.text}
      </li>
    );
  });
  return (
    <>
      <div className="flex items-center justify-between shadow-lg">
        <div className="w-[10%] h-[10%] cursor-pointer">
          <Link to="/">
            <img
              src={shoeLogo}
              alt="Turkish shoe logo"
              className="rounded-md m-[5%]"
            />
          </Link>
        </div>
        {!isSmallScreen ? (
          <div className="flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-4">{renderedHeaderItems}</ul>
            </nav>
            {
              <div className="p-2 flex items-center space-x-4 w-full">
                {
                  <div className="text-blue-800 p-2 text-xl">
                    <Link to="/login">
                      <button className="p-1 rounded-md text-orange-700 hover:bg-blue-400 hover:text-white">
                        Login
                      </button>
                    </Link>{" "}
                    <span className="text-orange-500">|</span>{" "}
                    <Link to="/signup">
                      <button className="p-1 text-orange-700 rounded-md hover:bg-blue-400 hover:text-white">
                        SignUp
                      </button>
                    </Link>
                  </div>
                }
                {
                  <p className="flex sm:flex-row gap-2 flex-col">
                    <span className="mt-[1vh] cursor-pointer">Welcome</span>
                    <Link to="/">
                      <button
                        className="text-white bg-orange-300 p-1 rounded-md text-xl hover:bg-blue-400"
                        onClick={logOutHandler}
                      >
                        Logout
                      </button>
                    </Link>
                  </p>
                }
              </div>
            }
          </div>
        ) : (
          <div className="cursor-pointer text-4xl mb-[5%] p-1 text-orange-700 md:hidden">
            {!isNavOpen ? (
              <RxHamburgerMenu onClick={toggleNav} />
            ) : (
              <RxCross2 onClick={handleReToggle} />
            )}
          </div>
        )}
      </div>
      {isSmallScreen && isNavOpen && (
        <div className="flex shadow-lg mb-5 flex-col h-[50vh]">
          <ul className="flex flex-col w-[50%] mt-[2%]">
            {renderedHeaderItems}
          </ul>
          {
            <div className="flex w-full">
              {
                <div className="text-blue-800 m-0 p-2 text-xl">
                  <Link to="/login">
                    <button className="p-1 rounded-md text-orange-700 hover:bg-blue-400 hover:text-white">
                      Login
                    </button>
                  </Link>{" "}
                  <span className="text-orange-500">|</span>{" "}
                  <Link to="/signup">
                    <button className="p-1 rounded-md text-orange-700 hover:bg-blue-400 hover:text-white">
                      SignUp
                    </button>
                  </Link>
                </div>
              }
              {
                <p className="flex sm:flex-row gap-2 flex-col">
                  <span className="mt-[1vh] cursor-pointer">Welcome</span>
                  <Link to="/">
                    <button
                      className="text-white bg-orange-300 p-1 rounded-md text-xl hover:bg-blue-400"
                      onClick={logOutHandler}
                    >
                      Logout
                    </button>
                  </Link>
                </p>
              }
            </div>
          }
        </div>
      )}
    </>
  );
};
export default Header;
