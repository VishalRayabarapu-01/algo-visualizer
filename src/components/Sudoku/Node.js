import React from 'react'
import './node.css'
const Node = (props) => {
  let [i, j] = props.id.split('-')
  return (
    <div style={{fontFamily : 'Inclusive Sans'}} className={`cell fs-3 pt-1 text-center ${i==='0' ? 'border-top' : ''} ${j==='0' ? 'border-left' : ''} ${(j + 1) % 3 === 0 ? 'border-right' : ''} ${(i + 1) % 3 === 0 ? 'border-bottom' : ''} ${props.obj.isFocused ? 'focused' : ''}`}>{props.obj.value}</div>
  )
}

export default Node
