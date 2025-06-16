import bugIcon from "../assets/Bug_NH_Icon.png";
import fishIcon from "../assets/Fish_NH_Icon.png";
import fishbugIcon from "../assets/NH-Icon-Nook_Phone-Critterpedia.webp";

function Header() {
  return (
    <>
      <header>
        <div className="flex flex-column items-center justify-center">
          <h1 className="font-rodin">Animal Crossing Fish and Bugs guide</h1>
          <nav className="flex flex-column items-center justify-between sm:justify-around p-2 pt-10">
            <a href="#" className="hover:text-gray-500">
              <img src={bugIcon} alt="Bug Icon" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-gray-500">
              <img src={fishIcon} alt="Fish Icon" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-gray-500">
              <img src={fishbugIcon} alt="Fish Icon" className="w-8 h-8" />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
