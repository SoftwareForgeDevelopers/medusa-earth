function Label({ text, white }) {

  const classNames = `flex justify-center items-center w-max h-32 py-1 px-5 bg-var-grey-blue rounded-25 border border-solid border-gray-200 ${white ? "text-white" : "text-var-dark-blue"} text-20`;
  
  return (
    <div className={classNames}>
      {text}
    </div>
  );
}

export default Label;
