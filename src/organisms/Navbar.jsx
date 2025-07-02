import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import MainMenuDropdown from "./MainMenuDropdown";
import CategoryDropdown from "./CategoryDropdown";
import NavbarMainMenuButton from "../atoms/buttons/NavbarMainMenuButton";
import UserProfileDropdown from "./UserProfileDropdown";
import UserProfileButton from "../atoms/buttons/UserProfileButton";
import CartButton from "../atoms/buttons/CartButton";

function Navbar(dropdownState) {
  const [isUserMenuOpen, setUserMenu] = useState(false);
  const [isMainMenuOpen, setMainMenu] = useState(false);
  const [isCategoryMenuOpen, setCategoryMenuOpen] = useState(false);

  const [username, setUsername] = useState('');

  function handleMainMenu() {
    setMainMenu(!isMainMenuOpen);
    setUserMenu(false);
    setCategoryMenuOpen(false);
  }

  function handleUserMenu() {
    setUserMenu(!isUserMenuOpen);
    setMainMenu(false);
    setCategoryMenuOpen(false);
  }

  function handleCategoryMenu() {
    setCategoryMenuOpen(!isCategoryMenuOpen);
    setMainMenu(false);
    setUserMenu(false);
  }

  useEffect(() => {
    setUserMenu(false);
    setMainMenu(false);
    setCategoryMenuOpen(false);
  }, [dropdownState]);

  useEffect(()=>{
    const userDetails = localStorage.getItem('user');

    setUsername(JSON.parse(userDetails)?.userName);
  },[])

  return (
    <div>
      <nav className="bg-[#84A98C] border-gray-200 dark:bg-[#84A98C] rounded-full w-auto ml-3 mt-3 mr-3">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1.5">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          ></a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
            {/* Cart Button */}
            {/* <CartButton/> */}

            {/*User profile button */}
            <UserProfileButton handleUserMenu={handleUserMenu}/>

            {/* User profile Dropdown menu  */}
            <UserProfileDropdown isUserMenuOpen={isUserMenuOpen} userName={username}/>

            <NavbarMainMenuButton handleMainMenu={handleMainMenu}/>
          </div>

          {/* Main menu Dropdown */}
          <MainMenuDropdown isMainMenuOpen={isMainMenuOpen} handleCategoryMenu={handleCategoryMenu}/>


          <div className="items-end hidden justify-end w-full md:flex md:w-auto md:order-1 ml-auto mr-5">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#84A98C] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#84A98C] dark:bg-gray-800 md:dark:bg-[#84A98C] dark:border-gray-700">
              <li>
                <Link
                  to={"/home"}
                  className="block py-2 px-3 text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-[#2F3E46] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/posts"}
                  onClick={handleCategoryMenu}
                  className="block py-2 px-3 text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-[#2F3E46] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  to={"/addPost"}
                  onClick={handleCategoryMenu}
                  className="block py-2 px-3 text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-[#2F3E46] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Add-Post
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-[#2F3E46] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* category dropdown */}
          {/* <CategoryDropdown isCategoryMenuOpen={isCategoryMenuOpen}/> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
