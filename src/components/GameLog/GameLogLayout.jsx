import React from 'react'

export default function GameLogLayout({ gameTurn }) {
    return (
        <div>
            <p>Turn : {(gameTurn === -1) ? `None` : `${gameTurn + 1}` }</p>
        </div>
    )
}
