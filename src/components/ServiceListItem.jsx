function ServiceListItem({ type, content }) {

    let className = "text-18 font-w-bold";

    if(type === "dark"){
        className += " text-var-dark-blue";
    } else if( type === "light"){
        className += " text-white";
    }


  return (
    <li className="flex flex-row gap-2 items-center">
      <img src={`/assets/icons/${ type === "dark" ? "check-circle.png" : "check-circle-white.png"}`} alt="icon-check" className="w-20 h-20" />
      <p className={className}>{content}</p>
    </li>
  );
}

export default ServiceListItem;
