/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Square = (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.render = function () {
        return (React.createElement("button", { className: "square", onClick: this.props.onClick }, this.props.value));
    };
    return Square;
}(React.Component));
var Board = (function (_super) {
    __extends(Board, _super);
    function Board() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Board.prototype.renderSquare = function (i) {
        var _this = this;
        return (React.createElement(Square, { key: i, value: this.props.squares[i], onClick: function () { return _this.props.onClick(i); } }));
    };
    Board.prototype.render = function () {
        var _this = this;
        var BoardRow = function (props) {
            var rowsquares = [];
            for (var i = 0; i < props.N; i++) {
                rowsquares.push(_this.renderSquare(i + props.start));
            }
            return (React.createElement("div", { className: "board-row" }, rowsquares));
        };
        var board = [];
        for (var i = 0; i < this.props.N; i++) {
            board.push(React.createElement(BoardRow, { key: i * this.props.N, N: this.props.N, start: i * this.props.N }));
        }
        return React.createElement("div", null, board);
    };
    return Board;
}(React.Component));
var N = 3;
var MoveList = (function (_super) {
    __extends(MoveList, _super);
    function MoveList() {
        var _this = _super.call(this) || this;
        _this.state = {
            reverse: false
        };
        return _this;
    }
    MoveList.prototype.handleChange = function (event) {
        var checkbox = event.target;
        this.setState({ reverse: checkbox.checked });
    };
    MoveList.prototype.render = function () {
        var _this = this;
        var moves = this.props.history.map(function (step, move) {
            var desc;
            if (move == 0) {
                desc = React.createElement("p", null, "Game Start");
            }
            else if (move === _this.props.stepNumber) {
                desc = React.createElement("b", null,
                    "Move #",
                    move);
            }
            else {
                desc = React.createElement("p", null,
                    "Move #",
                    move);
            }
            return (React.createElement("li", { key: move },
                React.createElement("a", { href: "#", onClick: function () { return _this.props.jumpTo(move); } }, desc)));
        });
        if (this.state.reverse) {
            moves.reverse();
        }
        return (React.createElement("div", { className: "move-list" },
            React.createElement("label", null,
                " Reverse Order",
                React.createElement("input", { type: "checkbox", checked: this.state.reverse, onChange: function (event) { _this.handleChange(event); } }),
                " "),
            React.createElement("ol", null, moves)));
    };
    return MoveList;
}(React.Component));
var GameInfo = (function (_super) {
    __extends(GameInfo, _super);
    function GameInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameInfo.prototype.getStatus = function (squares, xIsNext) {
        var winner = this.props.calculateWinner(squares);
        if (winner) {
            return "Winner: " + winner;
        }
        else {
            if (squares.indexOf(null) == -1) {
                return "Tie Game";
            }
            else {
                return 'Next player: ' + (xIsNext ? 'X' : 'O');
            }
        }
    };
    GameInfo.prototype.render = function () {
        var _this = this;
        var cState = this.props.state;
        var current = cState.history[cState.stepNumber];
        var status = this.getStatus(current.squares, cState.xIsNext);
        return (React.createElement("div", { className: "game-info" },
            React.createElement("h4", null, status),
            React.createElement(MoveList, { history: cState.history, stepNumber: cState.stepNumber, jumpTo: function (i) { return _this.props.jumpTo(i); }, calculateWinner: this.props.calculateWinner })));
    };
    return GameInfo;
}(React.Component));
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        var N = 3;
        var emptysquares = [];
        for (var i = 0; i < N * N; i++) {
            emptysquares.push(null);
        }
        _this.state = {
            history: [{
                    squares: emptysquares
                }],
            stepNumber: 0,
            xIsNext: true
        };
        return _this;
    }
    Game.prototype.calculateWinner = function (squares) {
        //Check rows and columns, i is row/col number, j are entries along that
        for (var i = 0; i < N; i++) {
            var x0 = squares[i * N];
            for (var j = 1; x0 && j < N; j++) {
                if (squares[i * N + j] !== squares[i * N + j - 1]) {
                    x0 = null;
                }
            }
            if (x0)
                return x0;
            var y0 = squares[i];
            for (var j = 1; y0 && j < N; j++) {
                if (squares[i + N * j] !== squares[i + N * (j - 1)]) {
                    y0 = null;
                }
            }
            if (y0)
                return y0;
        }
        var diagl0 = squares[0], diagr0 = squares[N - 1];
        for (var i = 1; (diagl0 || diagr0) && i < N; i++) {
            if (squares[i + N * i] !== squares[i + N * (i - 1)]) {
                diagl0 = null;
            }
            if (squares[(N - i - 1) + N * i] !== squares[(N - i) + N * (i - 1)]) {
                diagr0 = null;
            }
        }
        if (diagl0 || diagr0) {
            return diagl0 || diagr0;
        }
        if (squares.indexOf(null) == -1) {
            return "tie";
        }
        return null;
    };
    Game.prototype.handleClick = function (i) {
        var history = this.state.history.slice(0, this.state.stepNumber + 1);
        var current = history[history.length - 1];
        var squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                    squares: squares
                }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    };
    Game.prototype.jumpTo = function (step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true,
        });
    };
    Game.prototype.render = function () {
        var _this = this;
        var history = this.state.history;
        var current = history[this.state.stepNumber];
        return (React.createElement("div", { className: "game" },
            React.createElement("div", { className: "game-board" },
                React.createElement(Board, { N: N, squares: current.squares, onClick: function (i) { return _this.handleClick(i); } })),
            React.createElement("div", { className: "game-info" },
                React.createElement(GameInfo, { state: this.state, jumpTo: function (i) { return _this.jumpTo(i); }, calculateWinner: this.calculateWinner }))));
    };
    return Game;
}(React.Component));
exports.Game = Game;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var Game_1 = __webpack_require__(1);
ReactDOM.render(React.createElement(Game_1.Game, null), document.getElementById("root"));


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map