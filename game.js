// Play
  // board = Initialize board
  // view.init(board)
  // Start the loop

// Loop
  // Tic the board, then get board state from model (board state includes active tetromino and changes to the settled tetrominos)
  // Send to view to render

// Rotate (callback)
  // Takes in a tetromino
  // Sends to model to update, gets new board state back.
  // Rerenders the board state.
// Moving (callback)
  // if board.move(e or left or right) {
  // view.render(piece)
  //}
// Dropping (callback)
  // Optional