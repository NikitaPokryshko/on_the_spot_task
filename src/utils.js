import axios from "axios";

export function* apiCall(config) {
  return yield call(axios, config);
}
