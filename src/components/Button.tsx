const Button = ({
  text,
  cssClass,
  onClick,
}: {
  text: string;
  cssClass: string;
  onClick?: () => void;
}) => {
  return (
    <button className={`btn ${cssClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
