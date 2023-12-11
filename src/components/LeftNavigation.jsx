/* eslint-disable react/prop-types */
import { navItems } from '../data/navItems'

function LeftNavigation() {
    let topNavItem = []

    navItems.forEach((item) => {
        if (item.typ === 'left') {
            topNavItem.push(item)
        }
    })

    return (
        <nav>
            <ul className="list-group col-3">
                {topNavItem.map((items) => (
                    <li key={items.id} className="list-group-item">
                        <a href="#">{items.namn}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default LeftNavigation
