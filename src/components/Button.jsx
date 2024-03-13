function Button({ type, styles ,content }) {
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
  }

  classNames += `text-${textColor} bg-${background} border border-${border} rounded-full ${styles}`;
  console.log(classNames);

  return <button className={classNames}>{content}</button>;
}

export default Button;
