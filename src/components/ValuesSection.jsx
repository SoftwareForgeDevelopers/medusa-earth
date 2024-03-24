import AttributteContainer from "./AttributtesContainer";
import Label from "./Label";

function ValuesSection() {
  return (
    <div className="flex flex-col py-28 px-16 gap-9 select-none tablet:gap-[80px]">
      <div className="flex flex-col items-center">
        <Label text="Valores" />
        <h3 className="text-[40px] text-var-dark-blue font-w-bold text-center tablet:text-[60px]">
          Energía renovable:
        </h3>
        <p className="text-[40px] text-var-dark-blue text-center tablet:text-[60px]">
          Tu Puente hacia un Futuro Sostenible
        </p>
      </div>
      <div className="flex items-center justify-center">
        <AttributteContainer />
      </div>
    </div>
  );
}

export default ValuesSection;
