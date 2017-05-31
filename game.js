function Board(el) {
    var ROWS = 14;
    var COLS = 14;
    this.rows = ROWS;
    this.cols = COLS;
    this.el = typeof el === 'string' ? document.querySelector(el) : el;
}

Board.prototype.draw = function() {

}

function Piece(x, y) {
    this.x = x;
    this.y = y;
}

function Game() {

}

Game.start = function() {
    var board = new Board('.board');
    board.draw();
}

Game.prototype.play = function(x, y) {
    var piece = new Piece(x, y);
}

Game.prototype.judge = function(x,y) {

}