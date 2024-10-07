import React from 'react'
import './nqueeen.css'
const Node = (props) => {
  let obj = props.obj
  const css = `
  ${props.board==='8' ? 'n-queen n-queen-small' : 'n-queen n-queen-large'}
  ${obj.applyBlack ? 'apply-black' : ''} 
  ${obj.focusSurrounding ? 'focused' : ''} 
  ${obj.collision ? 'collision' : ''}  
  ${obj.focused ? 'click-focused' : ''} `
  return (
    <div className={css}>
      {obj.isQueen && <img className='img-fluid pt-2 image-queen' src={`${process.env.PUBLIC_URL}/images/crown.png`} alt='queen' />}
    </div>
  )
}

export default Node
