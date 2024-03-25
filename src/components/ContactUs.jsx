import { useRef } from "react";
import Button from "./Button";
import { SendEmail } from "../services/Email.service";

function ContactUs() {

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    
    return (
    <div id="contact-us-section" className="mx-[64px] my-[112px] flex flex-row justify-between  ">
      <div className="flex flex-col justify-around">
        <button className="rounded-[25px] border border-solid border-var-dark-blue text-var-dark-blue w-[114px] px-[20px] py-[4px]">
          Contacto
        </button>
        <h2 className="text-[48px] w-bold text-var-dark-blue">¡Contáctanos!</h2>
        <p>¡Estamos aquí para ayudarte!</p>
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
            ref={nameRef}
            type="text"
            className="w-[596px] h-[50px] py-[14px] px-6 border border-var-dark-blue rounded-[28px]"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            ref={emailRef}
            type="text"
            autoComplete="name"
            className="w-[596px] h-[50px] py-[14px] px-6 border border-var-dark-blue rounded-[28px]"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            ref={messageRef}
            type="text"
            className="w-[595px] h-[180px] py-14 px-6 border border-var-dark-blue rounded-[8px]"
          />
        </div>
        <Button type="dark-blue" onClick={() => SendEmail({email: emailRef.current.value, subject: 'Test from medusa', body: messageRef.current.value})}>Enviar</Button>
      </div>
    </div>
  );
}

export default ContactUs;
