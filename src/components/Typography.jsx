const Typography = ({ children, maxW, truncate }) => (
  <p style={{maxWidth: maxW}} className={`text-[18px] leading-[170%] ${truncate && "truncate"}`}>{children}</p>
);

export default Typography;
