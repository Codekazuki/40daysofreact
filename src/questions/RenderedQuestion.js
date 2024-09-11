import React, { useState } from "react";
import data from "./data";
import Questions from "./Questions";

const RenderedQuestion = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};

export default RenderedQuestion;
