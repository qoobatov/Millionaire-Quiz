import "./app.css";
import { useEffect, useState, useMemo } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question:
        "Какому условию должна удовлетворять длина волны света λ, падающего на поверхность металла, чтобы началось явление фотоэффекта?",
      answers: [
        {
          text: "λ ≥ A/h",
          correct: false,
        },
        {
          text: "λ ≤ hc/A",
          correct: true,
        },
        {
          text: "λ > Ek/h",
          correct: false,
        },
        {
          text: "λ > hc/A",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "Лазер полезной мощностью 30 Вт испускает каждую секунду 1020 фотонов. Определите длину волны излучения лазера (мкм). h = 6,6•10-34Дж•с?",
      answers: [
        {
          text: "0,66",
          correct: true,
        },
        {
          text: "0,99",
          correct: false,
        },
        {
          text: "1,98",
          correct: false,
        },
        {
          text: "0.78",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question:
        "Сколько фотонов каждую секунду испускает источник монохроматического света с длиной волны 660 нм и мощностью 20 Вт? h = 6,6•10-34Дж•с",
      answers: [
        {
          text: "10**20",
          correct: false,
        },
        {
          text: "5•10**20",
          correct: false,
        },
        {
          text: "6,7•10**19",
          correct: true,
        },
        {
          text: "6,7•10**21",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="endText">Вы выиграли: {earned} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer
                  setStop={setStop}
                  questionNumber={questionNumber}
                  // setQuestionNumber={setQuestionNumber}
                />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
