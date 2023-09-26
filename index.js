class Knight {
    constructor(xPos,yPos) {
        this.position = [xPos,yPos];
        this.path = [[xPos,yPos]];
    }
}

const knightMoves = ([x,y],[a,b]) => {
    if ((x < 0 || x >= 8) || (y < 0 || y >= 8) || (a < 0 || b >= 8) (a < 0 || b >= 8)) {
        return "Coordinates out of bound";
    }
    if (x === a && y === b) return "You're already where you want to get!";

    // Create a chessboard as a 2D array to keep track of visited cells and paths
    const chessboard = Array(8).fill().map(() => Array(8).fill({ visited: false, path: [] }));

    // Define knight's possible moves
    const possibleMoves = [[+1,+2],[+1,-2],[-1,+2],[-1,-2],[+2,+1],[+2,-1],[-2,+1],[-2,-1]];


    const knigth = new Knight(x,y);
    const moves = getNextMoves([x,y]);
    const queue = [];

    for (const )

}