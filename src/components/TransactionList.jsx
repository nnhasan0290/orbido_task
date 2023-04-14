import assets from "../assets";

const TransactionList = ({ icon, title, deadLine, gain }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[12px]">
        <div className="bg-[#FDFDFE] rounded-full h-[40px] w-[40px] flex items-center justify-center flex-shrink-0">
          <img src={icon} alt="" />
        </div>
        <div>
          <h3 className="font-semibold text-white leading-[22px]">{title}</h3>
          <p className="text-[12px] leading-[22px]">{deadLine}</p>
        </div>
      </div>
      <div className="flex items-center gap-[4px]">
      <span className={!gain ? "triangle-down" : "triangle-up"}></span>
      <span className="text-[14px] leading-[22px]">-$250,93</span>
      </div>
    </div>
  );
};

export default TransactionList;
