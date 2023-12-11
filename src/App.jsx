import './App.css'
import Header from './components/Header'
import TopNavigation from './components/TopNavigation'
import Footer from './components/Footer'
import Button from './components/Button'

function App() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <Header companyName={'Nöjeshallen'} />
                </div>
                <TopNavigation />
                <Button />
                <Footer className="footer" />
            </div>
        </>
    )
}

export default App
