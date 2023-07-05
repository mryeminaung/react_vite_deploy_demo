import { useState } from "react";
import "./counter.css";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleDecrease = () => setCount(count - 1);
    const handleReset = () => setCount(0);
    const handleIncrement = () => setCount(count + 1);

    let valueColor = "black";
    if (count > 0) valueColor = "green";
    else if (count < 0) valueColor = "red";

    return (
        <main>
            <div className="container">
                <h1>Counter App</h1>
                <span className="value" style={{ color: valueColor }}>
                    {count}
                </span>
                <div className="button-container">
                    <button
                        onClick={() => handleDecrease()}
                        className="btn decrease"
                    >
                        decrease
                    </button>
                    <button onClick={() => handleReset()} className="btn reset">
                        reset
                    </button>
                    <button
                        onClick={() => handleIncrement()}
                        className="btn increase"
                    >
                        increase
                    </button>
                </div>
            </div>
        </main>
    );
}
