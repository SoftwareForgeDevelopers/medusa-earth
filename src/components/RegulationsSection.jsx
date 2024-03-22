function RegulationsSection() {
  return (
    <section className="py-[83px] text-center text-var-light-grey text-[20px] flex flex-col items-center justify-center">
      <p>
        Con la confianza de los entes reguladores más importantes del mundo:
      </p>
      <div className="flex flex-row items-center justify-center">
        <img
          src="/assets/logo/suncolombia-logo.png"
          alt="suncolombia-logo"
          className="w-[229px] h-[66px]"
        />
        <img src="/assets/logo/siel-logo.png" alt="siel-logo" />
        <img
          src="/assets/logo/emergente-logo.png"
          alt="emergente-logo"
          className="w-[198px] h-[56px]"
        />
      </div>
    </section>
  );
}

export default RegulationsSection;
