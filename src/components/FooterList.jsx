const FooterLinks = ({ head, links }) => {
  return (
    <div className="flex flex-col gap-[24px] max-sm:mb-[30px]">
      <h2 className="text-white font-[500] text-[18px] leading-[27px]">
        {head}
      </h2>
      <ul className="flex flex-col gap-[12px] cursor-pointer">
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
