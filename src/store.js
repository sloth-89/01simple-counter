// store.js

import { configureStore } from "@reduxjs/toolkit";

//방금 전 counter.js에서 export default한 counterSlice.reducer
// default로 export한것은 다른이름의 별칭으로 import 가능 !
//  여기서는 counterReducer 로 counterSlice.reducer이름을 변경함
// export default로 모듈을 내보낸다면 export한 이름과 상관없이 원하는 이름으로 import가 가능하다.(다른 이름으로 변경가능)
// 그리고 중괄호 작성이 필요하지 않다.
// default가 아닐 시 중괄호 작성 필요
// 경로 파일에 컴포넌트가 여러개일 경우 default는 꼭 하나여야만 한다.

// named export : export한 이름으로만 가져올 수 있고, 어떤 것을 import하는지 정확히 알 수 있다.
// export default : export한 이름이 아닌 원하는 이름으로 import할 수 있지만 import하는 대상이 명확하지 않으므로 팀원과 함께 할때는 이름을 일치 시키는게 좋다.
import counterReducer from "./redux/counter";


//redux store
export const store = configureStore({
  reducer: {
    //add counterReducer
    counter: counterReducer
  },
});