function Button({ type, styles, content, onClick, children }) {
  let classNames =
    "flex justify-center items-center px-5 gap-2 h-12 font-w-bold ";
  let background, border, textColor;

  if (type === "white") {
    background = "white";
    border = "var-dark-blue";
    textColor = "var-dark-blue";
  } else if (type === "dark-blue") {
    background = "var-dark-blue";
    border = "var-dark-blue";
    textColor = "white";
  } else if (type === "transparent") {
    background = "transparent";
    border = "white";
    textColor = "white";
  } else if (type === "white-without-border") {
    background = "white";
    border = "white";
    textColor = "var-dark-blue";
  }

  classNames += `text-${textColor} bg-${background} border border-${border} rounded-full ${styles}`;

  return (
    <button className={classNames} onClick={onClick}>
      {content} {children}
    </button>
  );
}

export default Button;
