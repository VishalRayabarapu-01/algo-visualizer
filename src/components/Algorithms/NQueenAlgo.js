const FoucsValidPaths = (i, j, board, grid, setGrid) => {
    removeFocus(grid)
    for (let k = 0; k < board; k++) {
        grid[i][k].focusSurrounding = true
        grid[k][j].focusSurrounding = true
    }
    for (let x = i, y = j; x >= 0 && y >= 0; x--, y--) {
        grid[x][y].focusSurrounding = true
    }
    for (let x = i, y = j; x < board && y >= 0; x++, y--) {
        grid[x][y].focusSurrounding = true
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
const resetCollisions = (i, j, board, grid) => {
    for (let k = 0; k < board; k++) {
        grid[i][k].collision = false
        grid[k][j].collision = false
    }
    for (let x = i, y = j; x >= 0 && y >= 0; x--, y--) {
        grid[x][y].collision = false
    }
    for (let x = i, y = j; x < board && y >= 0; x++, y--) {
        grid[x][y].collision = false
    }
}
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const clearBoard = (grid) => {
    grid.forEach(row => {
        row.forEach((element) => {
            element.isQueen = false
            element.focused = false
            element.focusSurrounding = false
            element.collision = false
        })
    });
}
const solveBoard = async (board, grid, j, setGrid, speedRef) => {
    if (j >= board) return true;
    for (let i = 0; i < board; i++) {
        FoucsValidPaths(i, j, board, grid, setGrid)
        await sleep(1200 - speedRef.current)
        if (isValid(board, grid, i, j)) {
            grid[i][j].isQueen = true
            setGrid([...grid])
            await sleep(1200 - speedRef.current)
            if (await solveBoard(board, grid, j + 1, setGrid, speedRef)) {
                return true
            }
            grid[i][j].isQueen = false
            setGrid([...grid])
            await sleep(1200 - speedRef.current)
        } else {
            grid[i][j].isQueen = true
            setGrid([...grid])
            await sleep(1200 - speedRef.current)
            grid[i][j].isQueen = false
            resetCollisions(i, j, board, grid)
            removeFocus(grid)
            setGrid([...grid])
        }
    }
    return false
}
const isValid = (board, grid, i, j) => {
    let valid = true
    for (let k = 0; k < board; k++) {
        if (grid[i][k].isQueen) {
            grid[i][k].collision = true
            valid = false
        }
        if (grid[k][j].isQueen) {
            grid[k][j].collision = true
            valid = false
        }
    }
    for (let x = i, y = j; x >= 0 && y >= 0; x--, y--) {
        if (grid[x][y].isQueen) {
            grid[x][y].collision = true
            valid = false
        }
    }
    for (let x = i, y = j; x < board && y >= 0; x++, y--) {
        if (grid[x][y].isQueen) {
            grid[x][y].collision = true
            valid = false
        }
    }
    return valid
}
export { solveBoard, clearBoard ,removeFocus}