import bugIcon from "../assets/Bug_NH_Icon.png";
import fishIcon from "../assets/Fish_NH_Icon.png";
import fishbugIcon from "../assets/NH-Icon-Nook_Phone-Critterpedia.webp";
import hummingFont from "../fonts/humming.otf";
import "../index.css"; 


function Header() {
  return (
    <>
      <header>
        <div className="flex flex-row items-center justify-center pt-16">
          <h1 className="font-humming text-[#C39D67] text-3xl">
            Animal Crossing Fish and Bugs guide
          </h1>
        </div>

        <nav className="flex flex-column items-center justify-between sm:justify-around p-2 gap-2 pt-10">
          <a href="#" className="hover:text-gray-500">
            <img
              src={bugIcon}
              alt="Bug Icon"
              className="w-12 h-12 bg-white rounded-xl"
            />
          </a>
          <a href="#" className="hover:text-gray-500">
            <img
              src={fishIcon}
              alt="Fish Icon"
              className="w-12 h-12 bg-white rounded-xl"
            />
          </a>
          <a href="#" className="hover:text-gray-500">
            <img
              src={fishbugIcon}
              alt="Fish Icon"
              className="w-12 h-12 bg-white rounded-xl"
            />
          </a>
          <hr className="w-full h-px my-8 bg-[#C39D67] border-0 "></hr>
        </nav>
      </header>
    </>
  );
}

export default Header;
