// store.js

import { configureStore } from "@reduxjs/toolkit";

//방금 전 counter.js에서 export default한 counterSlice.reducer
// default로 export한것은 다른이름의 별칭으로 import 가능 !
//  여기서는 counterReducer 로 counterSlice.reducer이름을 변경함
import counterReducer from "./redux/counter";


//redux store
export const store = configureStore({
  reducer: {
    //add counterReducer
    counter: counterReducer
  },
});