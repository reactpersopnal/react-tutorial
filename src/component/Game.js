import Board from "Board"

class Game extends React.Component {
    render () {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status*/}</div>
                    <div>{/* TOOD */}</div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Game/>
    document.getElementById('root')
)
