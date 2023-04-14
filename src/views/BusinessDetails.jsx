import assets from "../assets";
import BtnDefault from "../components/BtnDefault";
import Heading from "../components/Heading";
import ListItem from "../components/ListItem";
import Typography from "../components/Typography";

const BusinessDetails = () => {
  return (
    <div className="lg:flex gap-[120px] items-center sm:mr-[60px]">
      <div className="flex flex-col basis-1/2 lg:gap-[48px] gap-3 max-sm:p-2">
        <Heading>You do the business, we’ll handle the money.</Heading>
        <Typography>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </Typography>
        <BtnDefault w={"170px"} h={"64px"} fontSize="18px">Get Started</BtnDefault>
      </div>
      <div className="basis-1/2">
        <ListItem
          icon={assets.icons.StarLogo}
          header={"Rewards"}
          description={
            "The best credit cards offer some tantalizing combinations of promotions and prizes"
          }
        />
        <ListItem
          icon={assets.icons.ShieldLogo}
          header={"100% Secured"}
          description={
            "We take proactive steps make sure your information and transactions are secure."
          }
        />
        <ListItem
          icon={assets.icons.SendLogo}
          header={"Balance Transfer"}
          description={
            "A balance transfer credit card can save you a lot of money in interest charges."
          }
        />
      </div>
    </div>
  );
};

export default BusinessDetails;
