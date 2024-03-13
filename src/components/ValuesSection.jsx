import AttributteContainer from "./AttributtesContainer";
import Label from "./Label";

function ValuesSection() {
  return (
    <div className="flex flex-col gap-128">
      <div className="flex flex-col items-center">
        <Label text="Valores" />
        <h3 className="text-60 text-var-dark-blue font-w-bold">
          Energia renovable:
        </h3>
        <p className="text-60 text-var-dark-blue">
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
