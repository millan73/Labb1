/* eslint-disable react/prop-types */
import { navItems } from '../data/navItems'
import { NavLink, Route, Routes } from 'react-router-dom'
import Start from '../pages/Start'
import Bowling from '../pages/Bowling'
import Biljard from '../pages/Biljard'
import Dart from '../pages/Dart'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

function TopNavigation() {
    let topNavItem = []

    navItems.forEach((item) => {
        if (item.typ === 'top') {
            topNavItem.push(item)
        }
    })

    return (
        <>
            <nav>
                <ul className="nav bg-dark">
                    {topNavItem.map((items) => (
                        <li key={items.id} className="nav-item">
                            <NavLink
                                style={({ isActive }) => {
                                    {
                                        return isActive ? { color: '#fff' } : {}
                                    }
                                }}
                                to={items.route}
                                className="nav-link"
                            >
                                {items.namn}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/bowling" element={<Bowling />} />
                <Route path="/biljard" element={<Biljard />} />
                <Route path="/dart" element={<Dart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}
export default TopNavigation
