import { toast } from "react-hot-toast";
import assets from "../assets";
import BtnDefault from "./BtnDefault";

const MakePaymentCard = () => {
  return (
    <div className="make_payment_card p-[20px] absolute bottom-[217px] right-0 sm:left-[225px] flex flex-col justify-between">
      <div className="flex gap-[12px] items-center">
        <div className="h-[56px] w-[56px] rounded-full bg-white flex items-center justify-center">
          <img src={assets.icons.paypal} alt="" />
        </div>
        <div className="leading-[160%] tracking-[0.01em]">
          <h3 className="font-semibold text-[24px] text-white ">Paypal</h3>
          <span className="text-[12px]">Checkout</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[12px]">Total</span>
          <span className="text-white">$210</span>
        </div>
        <button className="border paypal_btn border-cyan-300 rounded-[10px] p-[7px]">
          Change
        </button>
      </div>
      <BtnDefault
        fontSize={"12px"}
        w="100%"
        h="33px"
        onClick={() => {
          toast.success("Great! Your Payment is succesfull.");
        }}
      >
        Make Payment
      </BtnDefault>
    </div>
  );
};

export default MakePaymentCard;
