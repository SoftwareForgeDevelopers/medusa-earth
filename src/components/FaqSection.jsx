import React from "react";
import Label from "./Label";
import QuestionCard from "./QuestionCard";
import Button from "./Button";

const QuestionCardCaller = () => {
  const questions = [
    {
      question: "¿Cómo participo en los proyectos de Medusa Energy?",
      answer:
        "Regístrate en nuestra plataforma como inversor y explora las oportunidades disponibles.",
      dark: false,
    },
    {
      question: "¿Cómo se seleccionan los proyectos en Medusa Energy?",
      answer: "Add answer here",
      dark: true,
    },
    {
      question: "¿Qué tipos de proyectos ofrece Medusa Energy?",
      answer: "Add answer here",
      dark: true,
    },
    {
      question: "¿Cómo contacto al servicio de atención al cliente?",
      answer:
        "Envía un correo a info@medusa.earth o contáctanos por WhatsApp al +57 3136669787.",
      dark: false,
    },
    {
      question: "¿Cómo solicito financiamiento para mi proyecto energético?",
      answer:
        "Completa un formulario en nuestra plataforma o contáctanos para obtener ayuda.",
      dark: false,
    },
    {
      question: "¿Qué beneficios obtienen los inversores en Medusa Energy?",
      answer: "Add answer here",
      dark: true,
    },
  ];

  return (
    <React.Fragment>
      {questions.map((question, index) => {
        const isEven = index % 2 === 0;
        const orderClass = isEven ? "tablet:order-first" : "tablet:order-last";
        const orderClassSm = `${question.dark ? "order-last" : "order-first"}`;
        return (
          <div
            key={index}
            className={`w-full tablet:w-1/3 ${orderClass} ${orderClassSm}`}>
            <QuestionCard
              question={question.question}
              answer={question.answer}
              dark={question.dark}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
};

function MoreInfoCard() {
  return (
    <div className="flex justify-between items-center py-[34px] px-[37px] rounded-[28px] bg-white">
      <div className="flex flex-col gap-4 w-2/3">
        <h3 className="text-var-dark-blue text-[45px]">
          <span className="font-w-bold">¿Seguís teniendo consultas?</span>
        </h3>
        <p className="max-w-lg text-left text-[18px]">
          Si tenés más preguntas o necesitas clarificaciones adicionales,
          nuestro equipo está listo para ofrecerte la información que necesitas.
        </p>
      </div>
      <Button type="dark-blue" styles="font-w-regular">
        Contactate con nuestro equipo
        <span>
          <img
            src="/assets/icons/little-arrow-white.webp"
            alt="arrow-up"
            className="w-[18px] h-4"
          />
        </span>
      </Button>
    </div>
  );
}

function FaqSection() {
  return (
    <section id="faq-section" className="flex flex-col mt-28 mb-5 py-28 px-16 gap-12 rounded-ss-[70px] rounded-ee-[70px] bg-cover bg-center bg-var-dark-blue">
      <div className="flex flex-col gap-[45px]">
        <div className="flex flex-col gap-[32px]">
          <Label text="F.A.Q" white={true} />
          <h3 className="text-white text-5xl">
            <span className="font-w-bold">Preguntas Frecuentes: </span>
            Respuestas Claras
          </h3>
        </div>
        <div className="flex flex-col tablet:flex-row tablet:flex-wrap">
          {<QuestionCardCaller />}
        </div>
      </div>

      <MoreInfoCard />
    </section>
  );
}

export default FaqSection;
