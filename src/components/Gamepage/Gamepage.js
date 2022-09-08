import React from 'react';

const Gamepage = () => {

    const [square, setSquare] = React.useState(Array(9).fill(null))

    const nextVal = calcNextVal(square)
    const winner = calcWinner(square)
    const status = calcStatus(winner, square, nextVal)

    function calcStatus(winner, square, nextVal){
        return winner
        ? 'Winner: '+ winner
        : square.every(Boolean)
        ? "Can't Play"
        : 'Next player: '+nextVal
    }

    function calcNextVal(squares){
        return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
    }

    function calcWinner(squares){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for(let i = 0; i < lines.length; i++){
            const [a, b, c] = lines[i]
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a]
            }
        }
        return null
    }

    function selectSquare(squ) {
        console.log(squ)
        if(winner || square[squ]){
            return
        }
        const squareCopy = [...square]
        squareCopy[squ] = nextVal
        console.log(squareCopy)
        setSquare(squareCopy)
    }

    function renderSquare(i){
        return (
            <button className="square" onClick={() => selectSquare(i)}>
                {square[i]}
            </button>
        )
    }

    function restart(){
        setSquare(Array(9).fill(null))
    }

    return (
        <div className='main_board'>
            <div className='statusBar'>{status}</div>
            <div className='board-row'>
             {renderSquare(0)}
             {renderSquare(1)}
             {renderSquare(2)}
            </div>
            <div className='board-row'>
             {renderSquare(3)}
             {renderSquare(4)}
             {renderSquare(5)}
            </div>
            <div className='board-row'>
             {renderSquare(6)}
             {renderSquare(7)}
             {renderSquare(8)}
            </div>
            <button className='restart' onClick={restart}>
                Restart
            </button>
        </div>
    );
};

export default Gamepage;