/* eslint-disable react/prop-types */

function Button({ className, text, message }) {
    return (
        <button onClick={() => alert(message)} className={className}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    className: 'btn btn-primary',
    text: 'Läs mer'
}

export default Button
