const FoucsValidPaths = (i, j, grid, setGrid) => {
    removeFocus(grid)
    for (let k = 0; k < 9; k++) {
        grid[i][k].focusSurrounding = true
        grid[k][j].focusSurrounding = true
        grid[3 * Math.floor(i / 3) + Math.floor(k / 3)][3 * Math.floor(j / 3) + k % 3].focusSurrounding = true;
    }
    grid[i][j].focused = true
    setGrid([...grid])
}
const removeFocus = (grid) => {
    grid.forEach((row) => {
        row.forEach(element => {
            element.focused = false
            element.focusSurrounding = false
        });
    })
}
const resetCollisions = (i, j, grid) => {
    for (let k = 0; k < 9; k++) {
        grid[i][k].collision = false
        grid[k][j].collision = false
        grid[3 * Math.floor(i / 3) + Math.floor(k / 3)][3 * Math.floor(j / 3) + k % 3].collision = false;
    }
}
const checkForCollisions = (i, j, grid, number, msg) => {
    let sub_i, sub_j
    let collision = false
    for (let k = 0; k < 9; k++) {
        if (grid[i][k].value === number) {
            if (msg === 'from filling sudoku') {
                return true
            }
            grid[i][k].collision = true
            collision = true
        }
        if (grid[k][j].value === number) {
            if (msg === 'from filling sudoku') {
                return true
            }
            grid[k][j].collision = true
            collision = true
        }
        sub_i = 3 * Math.floor(i / 3) + Math.floor(k / 3)
        sub_j = 3 * Math.floor(j / 3) + k % 3
        if (grid[sub_i][sub_j].value === number) {
            if (msg === 'from filling sudoku') {
                return true
            }
            grid[sub_i][sub_j].collision = true
            collision = true
        }
    }
    return collision
}


const fillSudoku = async (grid, setGrid, speedRef) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (grid[i][j].value === '') {
                for (let k = 1; k <= 9; k++) {
                    let val = k + ''
                    FoucsValidPaths(i, j, grid, setGrid)
                    await sleep(1200 - speedRef.current)
                    if (checkForCollisions(i, j, grid, val)) {
                        grid[i][j].value = val
                        setGrid([...grid])
                        await sleep(1200 - speedRef.current)
                        grid[i][j].value = ''
                        resetCollisions(i, j, grid)
                        removeFocus(grid)
                        setGrid([...grid])
                    } else {
                        grid[i][j].value = val
                        setGrid([...grid])
                        await sleep(1200 - speedRef.current)
                        if (await fillSudoku(grid, setGrid, speedRef)) {
                            return true
                        }
                        grid[i][j].value = '';
                        setGrid([...grid])
                        await sleep(1200 - speedRef.current)
                    }
                }
                return false
            }
        }
    }
    return true
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export { FoucsValidPaths, checkForCollisions, removeFocus, sleep, resetCollisions, fillSudoku }