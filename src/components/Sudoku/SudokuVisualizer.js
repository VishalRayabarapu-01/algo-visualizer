import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar'
import Grid from './Grid'
import KeyPad from './KeyPad'
const SudokuVisualizer = () => {

  const [grid, setGrid] = useState([])
  useEffect(() => {
    const createCell = (i, j) => {
      return {
        row: i,
        col: j,
        value: '',
        isFocused: false
      }
    }
    let n = 9;
    let matrix = []
    for (let i = 0; i < n; i++) {
      let row = []
      for (let j = 0; j < n; j++) {
        row.push(createCell(i, j))
      }
      matrix.push(row)
    }
    setGrid(matrix)
  }, [])

  const numbers = Array(9).fill().map((_, idx) => idx + 1)
  return (
    <>
      <Navbar />
      <div className='container' >
        <div className="row p-4 mt-4">
          <div className="col-12 col-md-6 mb-4">
            <Grid grid={grid} />
          </div>
          <div className="col-12 col-md-6">
            <KeyPad  numbers={numbers} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SudokuVisualizer
