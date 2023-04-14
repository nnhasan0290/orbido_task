const Typography = ({ children, maxW }) => (
  <p style={{maxWidth: maxW}} className="text-[18px] leading-[170%]">{children}</p>
);

export default Typography;
