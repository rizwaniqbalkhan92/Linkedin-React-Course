import React, { useEffect, useState } from 'react'

const ScoreCounter = () => {
    const [score, setScore] = useState(JSON.parse(localStorage.getItem("score")) || 0)
    useEffect(() => {
        localStorage.setItem("score", score);
    }, [score])
    return (
        <div>
            <h1>Score : {score}</h1>
            <button  onClick={() => setScore(prev => prev + 1)}>INCREMENT</button>&nbsp;
            <button disabled={score <= 0 ?true : false } onClick={() => setScore(prev => prev - 1)}>DECREMENT</button>
        </div>
    )
}

export default ScoreCounter