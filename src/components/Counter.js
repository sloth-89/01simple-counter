// /components/Counter.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter";

const Counter = () => {
  //useSelector를 통해 redux store에서 특정 값을 관찰할 수 있다
  const count = useSelector((state) => state.counter.value);
  
  //dispatch에 action을 전달하면 해당 동작이 실행된다
  const dispatch = useDispatch();

  //increment(1증가) 동작
  const handleIncrement = () => dispatch(increment());
  //decrement(1감소) 동작
  const handleDecrement = () => dispatch(decrement());
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+1증가 버튼</button>&nbsp;&nbsp;&nbsp;
      <button onClick={handleDecrement}>-1감소 버튼</button>
    </div>
  );
};

export default Counter;