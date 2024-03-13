function Button({ type, content }) {
  let classNames = "flex justify-center items-center px-5 gap-2 h-12 ";
  let background, border, textColor;

  if (type === "white") {
    background = "white";
    border = "var-dark-blue";
    textColor = "var-dark-blue";
  } else if (type === "dark-blue") {
    background = "var-dark-blue";
    border = "var-dark-blue";
    textColor = "white";
  }

  classNames += `text-${textColor} bg-${background} border border-${border} rounded-full`;

  return <button className={classNames}>{content}</button>;
}

export default Button;
