import logProps from "./hoc/log-props"

function Counter({count,onCountUp, onCountDown}) {
    return(
        <div>
            <button onClick={onCountDown}>-</button>
            <span>{count}</span>
            <button onClick={onCountUp}>+</button>
        </div>
    )
}

export default logProps(Counter);