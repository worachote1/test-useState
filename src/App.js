import React, { useState } from 'react';

/* Every time youe component (function App() runs) 
your hook must excute in the excat same order
can not put hook inside of if statement,function,loop 
hook cannot be nested inside of anything*/

/* just at the top level of your function*/

/* the thing that you passed to useState 
is gonna be what the default state is*/

function App() {
  //useState will return array with two values , First value is gonna be your state 
  //and Second value is the function which is allow you to update your state
  const [count,setCount] = useState(69); 

  // when you update state your component re-render
  function decrementCount(){  
    // setCount(count - 1) this is incorrect way to update a value based on the previous value
    setCount( (prevCount) => prevCount-1)
  }

  function incrementCount(){
    setCount( (prevCount) => prevCount + 1)
  
  }

  return (

    <div className="App">
      <div className='count-control'>
        <button onClick={decrementCount}> - </button>
        <span style={{fontSize:'2rem' ,margin:'0 1.2rem'}}> {count}  </span>
        <button onClick={incrementCount}> + </button>
      </div>  
    </div>
  );
}

export default App;
