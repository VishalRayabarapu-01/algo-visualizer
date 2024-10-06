import React from 'react'
import './node.css'
const Node = (props) => {
  let [i, j] = props.id.split('-')
  const css = `cell fs-3 pt-1 text-center 
  ${props.obj.collision ? 'collision' : ''} 
  ${i === '0' ? 'border-top' : ''} 
  ${j === '0' ? 'border-left' : ''} 
  ${(j + 1) % 3 === 0 ? 'border-right' : ''} 
  ${(i + 1) % 3 === 0 ? 'border-bottom' : ''} 
  ${props.obj.focused ? 'click-focused' : ''} 
  ${props.obj.focusSurrounding ? 'focused' : ''}`
  return (
    <div onClick={() => props.clickHandlerForGrid(i, j)} style={{ fontFamily: 'Inclusive Sans', cursor: 'pointer' }} className={css}>{props.obj.value}</div>
  )
}

export default Node
