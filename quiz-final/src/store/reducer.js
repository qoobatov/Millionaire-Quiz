import { useTransition } from "react";
import { ADD_QUESTION, ADD_USERNAME } from "../store/actions";

const initialState = {
  questions: [
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
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    case ADD_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
}
