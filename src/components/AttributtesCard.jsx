function AttributtesCard({ type, title, description, icon }) {
  let boxClassName =
    "border border-solid flex flex-col items-center gap-[28px] rounded-xl w-[392px] h-[289.33px] py-[48px] px-8";
  let figureClassName =
    "w-[63.33px] h-[63.33px] flex justify-center items-center rounded-[52px] bg-var-grey-blue";
  let imageClassName = "rounded-[52px]";
  let h3ClassName = "text-xl font-ant-regular font-w-bold";
  let pClassName = "text-center font-ant-regular";

  if (type === "ligth-airwave") {
    boxClassName += " bg-white border-var-dark-blue";
    h3ClassName += " text-var-dark-blue";
    imageClassName += " w-[20.89px] h-[20.89px]";
    pClassName += " text-var-black";
  } else if (type === "ligth-energy-savings") {
    boxClassName += " bg-white border-var-dark-blue";
    h3ClassName += " text-var-dark-blue";
    imageClassName += "w-[20.89px] h-[20.89px]";
    pClassName += " text-var-black";
  } else if (type === "dark") {
    boxClassName += " bg-var-dark-blue";
    h3ClassName += " text-white";
    imageClassName += " w-[31.33px] h-[31.33px]";
    pClassName += " text-white";
  }

  return (
    <div className={boxClassName}>
      <figure className={figureClassName}>
        <img src={icon} alt={title} className={imageClassName} />
      </figure>
      <h3 className={h3ClassName}>{title}</h3>
      <p className={pClassName}>{description}</p>
    </div>
  );
}

export default AttributtesCard;
