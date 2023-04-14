import assets from "../assets";

const Header = () => {
  return (
    <div className="justify-between items-center sm:flex">
      <div className="flex items-center">
        <img src={assets.images.logo} alt="Logo" />
        <span className="font-semibold text-white uppercase">
          Or<span className="text-[#D69300]">bido</span>
        </span>
      </div>
      {/* nav items  */}
      <ul className="flex sm:gap-[56px] max-sm:justify-around my-2 sm:my-[36px]">
        <li className="text-white">Home</li>
        <li>About Us</li>
        <li>Features</li>
        <li>Solution</li>
      </ul>
    </div>
  );
};

export default Header;
