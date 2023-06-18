import React, { useState } from 'react'

const Second = () => {
    let num = 0;

    const countHandle = ()=>{
        num++;
        console.log(num);
        document.querySelector('span').innerHTML = num;
    }

    let [count,setCount] = useState(0);//let count = 0

    const paramHandle = (count)=>{

    }

  return (
    <div>
    <span className='num'>Second {num}</span>
    <button onClick={countHandle}>click</button>
    <span className='count'>{count}</span>
    <button onClick={ ()=>{
        setCount(5)
    } }>click</button>
    </div>
  )
}

export default Second

/*
1.파라미터가 없음
2.파라미터가 있다면 화살표함수를 만들어서 호출
*/ 