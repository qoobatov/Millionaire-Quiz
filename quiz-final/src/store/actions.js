export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_USERNAME = "ADD_USERNAME";

export const addQuestion = (questions) => ({
  type: ADD_QUESTION,
  payload: questions,
});

export const addUsername = (username) => ({
  type: ADD_USERNAME,
  payload: username,
});
