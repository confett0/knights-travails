class Knight {
    constructor(x,y) {
        this.position = [x,y];
    }

    getNextMoves() {
        const possibleMoves = [[+1,+2],[+1,-2],[-1,+2],[-1,-2],[+2,+1],[+2,-1],[-2,+1],[-2,-1]];
        return possibleMoves
        .map(([xCoord, yCoord]) => [xCoord + this.position[0], yCoord + this.position[1]])
        .filter(([xCoord, yCoord]) => (xCoord >= 0 && xCoord < 8) && (yCoord >= 0 && yCoord < 8));
    }
}