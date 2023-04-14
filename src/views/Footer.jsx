import assets from "../assets";
import Divider from "../components/Divider";
import FooterLinks from "../components/FooterList";
import Typography from "../components/Typography";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="sm:my-[154px] my-[50px] sm:px-[50px] px-2">
      <div className="justify-between sm:flex">
        <div className="flex flex-col gap-[15px] sm:gap-[34px] max-sm:mb-5">
          <div className="flex items-center">
            <img src={assets.images.logo} alt="" />
            <span className="font-semibold text-white text-[40.5px]">
              OR<span className="text-[#D69300]">BIDO</span>
            </span>
          </div>
          <Typography maxW={"312px"}>
            A new way to make the payments easy, reliable and secure.
          </Typography>
        </div>
        <FooterLinks
          head={"Useful Links"}
          links={[
            "Content",
            "How it Works",
            "Create",
            "Explore",
            "Terms & Services",
          ]}
        />
        <FooterLinks
          head={"Community"}
          links={[
            "Help Center",
            "Partners",
            "Suggestions",
            "Blog",
            "Newsletters",
          ]}
        />
        <FooterLinks
          head={"Partner"}
          links={["Our Partner", "Become a Partner"]}
        />
      </div>
      <Divider />
      <div className="justify-between sm:flex">
        <div className="flex gap-[15px]">
          <Typography>Copyright</Typography>
          <Typography>&copy;</Typography>
          <Typography truncate>2023 Orbido. All Rights Reserved.</Typography>
        </div>
        <div className="flex gap-[30px] text-white max-sm:mt-3">
          <BsInstagram size={21} />
          <BsFacebook size={21} />
          <AiFillTwitterCircle size={21} />
          <AiFillLinkedin size={21} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
