const BtnDefault = ({ children, w, h, fontSize, onClick }) => (
  <>
    <button
      onClick={onClick}
      style={{ width: w, height: h }}
      className={`btn_gradient max-sm:p-1 max-sm:my-2  font-[500] leadiing-[150%] text-[${fontSize}] text-[#00040E]`}
    >
      {children}
    </button>
  </>
);

export default BtnDefault;
