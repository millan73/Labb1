/* eslint-disable react/prop-types */
import { navItems } from '../data/navItems'

function TopNavigation() {
    let topNavItem = []

    navItems.forEach((item) => {
        if (item.typ === 'top') {
            topNavItem.push(item)
        }
    })

    return (
        <nav>
            <ul className="nav bg-dark">
                {topNavItem.map((items) => (
                    <li key={items.id} className="nav-item">
                        <a className="nav-link" href="#">
                            {items.namn}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default TopNavigation
