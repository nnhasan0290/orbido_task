import IconDefault from "./IconDefault";

const ListItem = ({ icon, header, description }) => {
  return (
    <div className="flex gap-[20px] p-[20px] list_item transition-all duration-300 rounded-[20px] cursor-pointer">
      <IconDefault src={icon} />
      <div>
        <h3 className="font-semibold text-[18px] leading-[130%] tracking-[0.01em] text-white mb-[8px]">
          {header}
        </h3>
        <p className="leading-[24px]">{description}</p>
      </div>
    </div>
  );
};

export default ListItem;
