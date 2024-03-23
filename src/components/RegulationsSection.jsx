function RegulationsSection() {
  return (
    <section className="flex flex-col items-center justify-center py-[83px] gap-[30px] text-center text-var-light-grey text-[20px]">
      <p className="px-[25px]">
        Con la confianza de los entes reguladores más importantes del mundo:
      </p>
      <div className="flex-col flex items-center justify-center laptop:flex-row">
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
