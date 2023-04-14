import BtnDefault from "../components/BtnDefault";
import Heading from "../components/Heading";
import Typography from "../components/Typography";

const NewsLetter = () => {
  return (
    <div className="sm:flex justify-between newsLetter_section px-2 sm:px-[100px] py-3 sm:py-[72px] items-center">
      <div className="flex gap-[24px] flex-col">
        <Heading>Let’s try our service now!</Heading>
        <Typography maxW={"445px"}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </Typography>
      </div>
      <BtnDefault h={"64px"} w={"170px"}>Get Started</BtnDefault>
    </div>
  );
};

export default NewsLetter
