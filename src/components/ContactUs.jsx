import { useRef } from "react";
import Button from "./Button";
import Label from "./Label";
import { SendEmail } from "../services/Email.service";


function ContactUs() {

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    
    return (
    <div
      id="contact-us-section"
      className="flex flex-col justify-between mx-[64px] my-[112px] gap-20 tablet:flex-col desktop:flex-row">
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
      <div className="flex flex-col gap-[64px] w-[100%] desktop:w-1/2">
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="name">Nombre</label>
          <input
            name="name"
            ref={nameRef}
            type="text"
            className="w-[100%] h-[50px] py-[14px] px-6 border border-var-dark-blue rounded-[28px] desktop:w-[100%] tablet:w-[100%]"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            ref={emailRef}
            type="text"
            autoComplete="name"
            className="w-[100%] h-[50px] py-[14px] px-6 border border-var-dark-blue rounded-[28px] desktop:w-[100%] tablet:w-[100%]"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            ref={messageRef}
            type="text"
            className="w-[100%] h-[180px] py-14 px-6 border border-var-dark-blue rounded-[8px] desktop:w-[100%] tablet:w-[100%] "
          />
        </div>
        <Button type="dark-blue" onClick={() => SendEmail({email: emailRef.current.value, subject: 'Test from medusa', body: messageRef.current.value})}>Enviar</Button>
      </div>
    </div>
  );
}

export default ContactUs;
