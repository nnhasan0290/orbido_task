import assets from "../assets";

const CoinSection = () => {
  return (
    <div className="flex sm:justify-around items-center mt-[30px] sm:mt-[220px] sm:mb-[109px] mb-[20px] overflow-x-auto px-8 max-sm:gap-4">
      <img src={assets.images.airbnb} alt="" />
      <img src={assets.images.binance} alt="" />
      <img src={assets.images.coinbase} alt="" />
      <img src={assets.images.dropbox} alt="" />
    </div>
  );
};

export default CoinSection;
