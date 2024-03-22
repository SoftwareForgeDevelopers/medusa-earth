import React from "react";

const QuestionDropDown = ({ question, answer, dark }) => {
  const mode = dark
    ? "border-white text-white bg-var-dark-blue"
    : "border-white text-var-dark-blue bg-white";

  return (
    <div className={`py-5 px-6 mx-4 mb-8 rounded-[24px] border ${mode}`}>
      <div className="grid divide-y max-w-xl mx-auto">
        <details className="group">
          <summary className="flex justify-between cursor-pointer list-none">
            <h3 className="text-2xl font-w-bold">{question}</h3>
            <figure className="w-[18px] h-[18px] flex-shrink-0">
              <img
                src={`/assets/icons/${dark ? "cross-white" : "cross-blue"}.webp`}
                alt="Cross"
                className="w-full h-full transition-transform duration-200 group-open:rotate-45"
              />
            </figure>
          </summary>
          <p className="mt-3 group-open:animate-fadeIn text-lg">{answer}</p>
        </details>
      </div>
    </div>
  );
};

function QuestionCard({ question, answer, dark }) {
  return <QuestionDropDown question={question} answer={answer} dark={dark} />;
}

export default QuestionCard;
