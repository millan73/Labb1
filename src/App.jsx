import './App.css'
import Header from './components/Header'
import TopNavigation from './components/TopNavigation'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <Header companyName={'Nöjeshallen'} />
                </div>
                <TopNavigation />
                <Footer className="footer" />
            </div>
        </>
    )
}

export default App
