/* eslint-disable react/prop-types */

function Footer({ className }) {
    return (
        <>
            <div className={className}>
                <footer>
                    <h2>Detta är en Footer</h2>
                </footer>
            </div>
        </>
    )
}

Footer.defaultProps = {
    className: 'row'
}

export default Footer
