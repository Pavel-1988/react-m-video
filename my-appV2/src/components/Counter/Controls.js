import React from 'react'      

const Controls = ({onIncrement, onDicrement}) => (
  <div className="Counter__controls">
      <button type='button' onClick ={onIncrement}>
        Увеличитть на 1
      </button>
      <button type='button' onClick={onDicrement}>
        Уменьшить на 1
      </button>
  </div> 
)

export default Controls