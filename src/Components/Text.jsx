const Text = ({ children, onRepair, onDelete }) => {
  return (
    <div className="txt-wrap">
      <p>{children}</p>
      <div>
        <span onClick={onRepair}>Sửa</span>
        {" | "}
        <span onClick={onDelete}>Xoá</span>
      </div>
    </div>
  );
};

export default Text;
