/* eslint-disable react/prop-types */

function Button({ className, text, onClick }) {
    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    className: 'btn btn-primary',
    text: 'Du behöver ange en text'
}

export default Button
