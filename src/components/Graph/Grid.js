import React from 'react'
import Node from './Node'

const Grid = (props) => {
  let grid = props.grid
  return (
    <div className='container-fluid mt-1'>
      {grid.map((row, idx) => {
        return <div className="row" key={`${row}-${idx}`}>
          {row.map((cell, idx1) => {
            return <Node initialGrid={props.initialGrid} object={cell} key={`${idx}-${idx1}`} id={`${idx}-${idx1}`} />
          })}
        </div>
      })}
    </div>
  )
}

export default Grid
