import "./button.css";

const Button = ({ onClick, text, outline = false }) => {
  return (
    <div>
      <button
        className={`${outline ? "btn-outline" : "btn"} btn`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
