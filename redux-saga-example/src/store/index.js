import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { put, call, takeEvery } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

const initState = {
  user: null
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_USER_DATA": {
      const { payload } = action;

      return {
        user: payload
      };
    }

    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* getUserData(params = {}) {
  const data = yield call(async userName => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    return data;
  }, params.payload.userName);

  yield put({
    type: "SET_USER_DATA",
    payload: data
  });
}

function* getUserDataSaga() {
  yield takeEvery("GET_USER_DATA", getUserData);
}

sagaMiddleware.run(getUserDataSaga);

export default store;
