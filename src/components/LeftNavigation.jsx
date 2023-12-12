import PropTypes from 'prop-types'
import { navItems } from '../data/navItems'

function LeftNavigation() {
    let leftNavItem = []

    navItems.forEach((item) => {
        if (item.typ === 'left') {
            leftNavItem.push(item)
        }
    })

    return (
        <nav>
            <ul className="list-group">
                {leftNavItem.map((items) => (
                    <li key={items.id} className="list-group-item">
                        <a href="#">{items.namn}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

LeftNavigation.propTypes = {
    items: PropTypes.string
}

export default LeftNavigation
