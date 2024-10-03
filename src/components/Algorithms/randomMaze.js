const isValid = (i, j, row, col) => {
    return i < row && i >= 0 && j < col && j >= 0;
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const createPath =  async (i, j, maze, rows, cols,setGrid) => {
    let dirs = [...directions];
    shuffleArray(dirs);
    for(const dir of dirs){
        const curRow = i + dir[0] * 2;
        const curCol = j + dir[1] * 2;
        if(isValid(curRow, curCol, rows, cols) && !maze[curRow][curCol].isWall ) {
            maze[curRow][curCol].isWall = true;
            maze[i + dir[0]][j + dir[1]].isWall = true;
            setGrid([...maze])
            await sleep(15);
            await createPath(curRow, curCol, maze, rows, cols,setGrid);
        }
    }
};

const addRandomOpenings = async (maze, rows, cols, setGrid,clearPathForInitial) => {
    for (let row = 1; row < rows - 1; row++) {
        for (let col = 1; col < cols - 1; col++) {
            if (Math.random() < 0.09 && maze[row][col].isWall) {
                maze[row][col].isWall = false;
            }
        }
    }
    clearPathForInitial(maze)
    setGrid([...maze]);
};

const setBorders = async (maze, rows, cols,setGrid) => {
    for (let col = 0; col < cols; col++) {
        maze[0][col].isWall = true;
        maze[0][col].isBorder = true;
        maze[rows - 1][col].isWall = true;
        maze[rows - 1][col].isBorder = true;
        await sleep(20);
        setGrid([...maze])
    }
    for (let row = 0; row < rows; row++) {
        maze[row][0].isWall = true;
        maze[row][cols - 1].isWall = true;
        maze[row][0].isBorder = true;
        maze[row][cols - 1].isBorder = true;
        await sleep(20);
        setGrid([...maze])
    }
};


export {setBorders,createPath,sleep,addRandomOpenings,directions}