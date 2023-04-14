import assets from "../assets";
import Heading from "../components/Heading";
import MakePaymentCard from "../components/MakePaymentCard";
import TransactionList from "../components/TransactionList";
import Typography from "../components/Typography";

const BillingSection = () => {
  return (
    <div className="sm:mt-[120px] mt-[160px] sm:flex justify-between items-end sm:mr-[60px]">
      <div className="px-[20px] py-[25px] transaction_list relative sm:w-[335px] w-full">
        <h3 className="font-semibold text-[22px] leading-[22px] text-white mb-[32px]">
          Lost Transaction
        </h3>
        <div className="flex flex-col gap-[20px]">
          <TransactionList
            icon={assets.icons.dribble}
            title={"Dribbble Pro"}
            deadLine={"15 Days ago"}
          />
          <TransactionList
            icon={assets.icons.netflix}
            title={"Netflix"}
            deadLine={"4 Days ago"}
          />
          <TransactionList
            icon={assets.icons.cash}
            title={"Manulife Cash"}
            deadLine={"4 Days ago"}
            gain
          />
        </div>
        <MakePaymentCard />
      </div>
      <div className=" max-w-[470px] flex flex-col sm:gap-[24px] gap-2 max-sm:mt-[25px] max-sm:p-2">
        <Heading>Easily control your billing & invoicing.</Heading>
        <Typography>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </Typography>
        <div className="mt-2 sm:mt-[25px] flex gap-[32px]">
          <img src={assets.images.apple} alt="" />
          <img src={assets.images.googlePlay} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BillingSection;
