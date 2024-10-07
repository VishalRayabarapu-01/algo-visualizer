import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Navbar'
import Grid from './Grid'
import KeyPad from './KeyPad'
const Nqueen = () => {
  const [board, setBoard] = useState(4)
  const [grid, setGrid] = useState([])
  const [speed, setSpeed] = useState(600)
  const speedRef = useRef(speed)

  useEffect(() => {
    speedRef.current = speed
  }, [speed])

  useEffect(() => {
    const addObject = (i, j, apply) => {
      return {
        row: i,
        col: j,
        isQueen: false,
        applyBlack: apply,
        focused: false,
        focusSurrounding: false,
        collision: false
      }
    }
    let matrix = []
    let apply = true
    for (let i = 0; i < board; i++) {
      let row = []
      let col_apply = apply
      apply = !apply
      for (let j = 0; j < board; j++) {
        col_apply = !col_apply
        row.push(addObject(i, j, col_apply))
      }
      matrix.push(row)
    }
    setGrid(matrix)
  }, [board])
  return (
    <>
      <Navbar />
      <div className='container  '>
        <div className="row p-4 mt-4">
          <div className="col-12 col-md-6 mb-4">
            <Grid board={board} grid={grid} />
          </div>
          <div className="col-12 col-md-6 p-4">
            <KeyPad  grid={grid} speedRef={speedRef} setGrid={setGrid} board={board} speed={speed} setBoard={setBoard} setSpeed={setSpeed} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Nqueen
