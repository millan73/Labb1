/* eslint-disable react/prop-types */
import { useState } from 'react'

function Button({ className }) {
    const [text, setText] = useState('Kllicka på mig')
    const [style, setStyle] = useState(className)

    const handleClick = () => {
        setText('Du klickade på mig')
        setStyle('btn btn-light')
    }

    return (
        <button onClick={handleClick} className={style}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    className: 'btn btn-primary'
}

export default Button
