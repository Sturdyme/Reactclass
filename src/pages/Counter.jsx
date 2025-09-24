import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/CounterSlice';

function Counter () {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
   <div className="text-center mt-[100px] ">
            <h1 className="text-3xl font-bold">Redux Counter</h1>
            <h2 className="text-2xl">{count}</h2>
            <div className="flex gap-4 justify-center mt-4">
                <button className="bg-blue-500 text-white w-32 p-2 rounded" onClick={() => dispatch(increment())}>+</button>
            <button className="bg-red-500 text-white w-32 p-2 rounded" onClick={() => dispatch(decrement())}>-</button>
             <button className="bg-red-500 text-white w-32 p-2 rounded" onClick={() => dispatch(reset())}>reset</button>
            </div>
        </div>
  );
}

export default Counter
