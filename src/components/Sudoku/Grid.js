import React from 'react'
import Node from './Node'

const grid = (props) => {
    return (
        <>
            {props.grid.map((row, idx) => {
                return <div className='row' key={`${row}-${idx}`}>
                    {row.map((col, idx1) => {
                        return <Node id={`${idx}-${idx1}`} key={`${idx}-${idx1}`} obj={col} />
                    })}
                </div>
            })}
        </>
    )
}

export default grid
