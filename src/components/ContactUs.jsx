import Label from "./Label";

function ContactUs() {
  return (
    <div
      id="contact-us-section"
      className="flex flex-col justify-between mx-[64px] my-[112px] gap-20 tablet:flex-row">
      <div className="flex flex-col gap-10 tablet:gap-20">
        <div className="flex flex-col gap-4">
          <Label text="Contacto" white={false} blueBorder={true} />
          <h2 className="text-[48px] font-w-bold text-var-dark-blue">
            ¡Contáctanos!
          </h2>
          <p>¡Estamos aquí para ayudarte!</p>
        </div>
        <ul className="flex flex-col gap-4 text-var-dark-blue">
          <li className="flex flex-row gap-1">
            <img src="/assets/icons/envelope.png" alt="" />
            <p>agustin@medusa.earth</p>
          </li>
          <li className="flex flex-row  gap-1">
            <img src="/assets/icons/phone.png" alt="" />
            <p>+57 3136669787</p>
          </li>
          <li className="flex flex-row  gap-1">
            <img src="/assets/icons/map.png" alt="" />
            <p>Calle 6a #16-45 Medellín, Colombia</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-[64px]">
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="name">Nombre</label>
          <input
            name="name"
            type="text"
            className="w-[596px] h-[50px] py-[14px] px-6 border border-var-dark-blue rounded-[28px]"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            autoComplete="name"
            className="w-[596px] h-[50px] py-[14px] px-6 border border-var-dark-blue rounded-[28px]"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            type="text"
            className="w-[595px] h-[180px] py-14 px-6 border border-var-dark-blue rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
