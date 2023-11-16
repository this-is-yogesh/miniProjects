const Button = ({ counter,Operation,Undo,history,Redo,undoHistory,Reset }) => {
    return (
        <>
            <div className="row">
                <button onClick={Undo} disabled={history.length === 0}>Undo </button>
                <button onClick={Redo} disabled={undoHistory.length ===0}>Redo</button>
                <button onClick={Reset}>Reset</button>
            </div>
            <hr/>
            <div className="row">
                <button onClick={()=>Operation("/2")}>/2</button>
                <button onClick={()=>Operation("-1")}> -1</button>
                <span className="counter"> {counter}</span>
                <button onClick={()=>Operation("+1")}>+1</button>
                <button onClick={()=>Operation("x2")}>x2</button>
            </div>
            <hr/>
        </>
    )
}

export default Button;