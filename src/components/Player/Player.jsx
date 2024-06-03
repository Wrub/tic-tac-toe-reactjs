import { useState } from 'react'

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    let playerElement = <span className='player-name'>{playerName}</span>

    const handleEditClick = () => {
        setIsEditing(editing => !editing)
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    const handlePlayerNameChange = e => {
        setPlayerName(e.target.value)
    }

    !isEditing
        ? playerElement
        : (playerElement = (
              <input
                  type='text'
                  value={playerName}
                  onChange={handlePlayerNameChange}
              />
          ))

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {playerElement}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Confirm'}</button>
        </li>
    )
}

export default Player
