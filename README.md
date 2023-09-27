# Knights Travails

This JavaScript program finds the shortest path between two positions for a chess' knight piece.

## Links
- [Link to assignment](https://www.theodinproject.com/lessons/javascript-knights-travails)

## How it works

The program defines a Knight class to represent the knight's position and path.
It checks if the input start and end points are within the 8x8 chessboard.
It uses a breadth-first search (BFS) algorithm to explore all possible knight moves.
The BFS algorithm keeps track of the knight's path and terminates when it finds a path that visits all squares.
Once a valid path is found, it displays the number of moves required and the sequence of positions.