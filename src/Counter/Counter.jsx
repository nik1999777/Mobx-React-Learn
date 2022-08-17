import React from 'react'
import './Counter.css'
import counter from '../store/counter'
import { observer } from 'mobx-react-lite'

const Counter = observer(() => {
  return (
    <div className='counter'>
      <div className='title'>{counter.total}</div>
      <div className='btns'>
        <button onClick={() => counter.decrement()} className='btn'>
          -
        </button>
        <button onClick={() => counter.increment()} className='btn'>
          +
        </button>
      </div>
    </div>
  )
})

export default Counter
