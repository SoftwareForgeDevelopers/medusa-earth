function ServiceListItem({ type, content }) {

    let className = "text-18 font-w-bold";

    if(type === "dark"){
        className += " text-var-dark-blue";
    }


  return (
    <li className="flex flex-row gap-2">
      <img src="/assets/icons/check-circle.png" alt="" />
      <p className={className}>{content}</p>
    </li>
  );
}

export default ServiceListItem;
