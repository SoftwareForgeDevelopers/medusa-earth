function Label({ text }) {
  return (
    <div className="flex justify-center items-center w-max h-32 py-1 px-5 bg-var-grey-blue rounded-25 border border-solid border-gray-200 text-var-dark-blue text-20">
      {text}
    </div>
  );
}

export default Label;
