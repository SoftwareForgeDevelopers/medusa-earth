import { Link } from "react-router-dom";
import Button from "./Button";

function MiniCard({ data }) {
  return (
    <div className="flex justify-evenly h-32 w-full py-[17px] px-[25px] gap-[42px] rounded-[29px] text-var-dark-blue font-w-bold bg-white">
      {data.map((item) => (
        <div key={item.value} className="flex flex-col items-center">
          <div className="flex gap-1 items-center">
            <figure>
              <img src={item.icon} alt={item.alt} className="w-8 h-8" />
            </figure>
            <div className="w-[100px] h-fit border-[0.1px] border-solid border-var-dark-blue"></div>
          </div>
          <h1 className="text-4xl">{item.value}</h1>
          <p className="text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function IntroSection() {
  return (
    <section
      id="intro-section"
      className="relative flex flex-col justify-between w-full h-[calc(100vh-64px)] bg-cover bg-[60%_100%] bg-gradient-blue-from-left tablet:h-[calc(100vh-80px)] tablet:bg-[0%_100%] tablet:rounded-ss-[300px] tablet:rounded-ee-[300px]"
      style={{
        backgroundImage: "url('/assets/backgrounds/intro-banner.webp')",
      }}>
      <div
        className={`absolute inset-0 bg-gradient-blue-from-up tablet:bg-gradient-blue-from-left tablet:rounded-ss-[300px] tablet:rounded-ee-[300px]`}
      />

      <div className="flex flex-col w-full pt-[37px] px-[25px] gap-3 text-center z-10 max-h-780px:tablet:pt-0 tablet:absolute tablet:inset-0 tablet:items-start tablet:justify-center tablet:px-[40px] desktop:px-[90px]">
        <p className="text-white text-xl tablet:text-[22px]">
          Invierte en un Futuro Sostenible para las Próximas Generaciones.
        </p>
        <div>
          <div className="flex flex-col text-5xl tablet:flex-row tablet:text-[70px] tablet:gap-10">
            <h1 className="font-bold text-white">Atrévete a soñar</h1>
            <img
              src="/assets/icons/arrow.png"
              alt="arrow-icon"
              className="hidden tablet:flex tablet:w-[66px] tablet:h-[66px]"
            />
          </div>
          <h1 className="text-5xl font-bold text-white tablet:text-[70px]">
            con energía renovable
          </h1>
        </div>
        <div className="hidden tablet:flex tablet:flex-row tablet:gap-4">
          <Link to="/projects">
            <Button
              type="white"
              styles="w-[243px] h-[51px] font-w-regular"
              content="Explorá nuestros proyectos"
            />
          </Link>
          <Button
            type="transparent"
            styles="w-[205px] h-[51px] font-w-regular"
            content="Resolvemos tus dudas"
            onClick={() => {
              document.querySelector("#faq-section").scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>

      <div className="mb-[28px] mx-[25px] tablet:absolute tablet:bottom-0 tablet:left-0 tablet:w-[466px] max-h-800px:tablet:mb-[30px] tablet:mb-[78px] tablet:mx-[40px] desktop:mx-[90px]">
        <MiniCard
          data={[
            {
              icon: "/assets/icons/dolar-with-down-arrow.webp",
              alt: "dolar sign",
              value: "+45k",
              description: "Proyectos financiados",
            },
            {
              icon: "/assets/icons/co2.webp",
              alt: "co2 icon",
              value: "$7.4M",
              description: "Impacto a nivel mundial",
            },
          ]}
        />
      </div>
    </section>
  );
}

export default IntroSection;
