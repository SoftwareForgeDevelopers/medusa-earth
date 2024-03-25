function Label({ text, white, blueBorder }) {
  const classNames = `flex justify-center items-center w-max h-[32px] py-1 px-5 rounded-[25px] border border-solid ${blueBorder ? "border-var-dark-blue bg-var-very-light-grey" : "border-gray-200 bg-var-grey-blue"} ${white ? "text-white" : "text-var-dark-blue"} text-[20px]`;

  return <div className={classNames}>{text}</div>;
}

export default Label;
