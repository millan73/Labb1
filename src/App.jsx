import './App.css'
import Header from './components/Header'
import TopNavigation from './components/TopNavigation'
import Footer from './components/Footer'
import Section from './components/Section'
import Button from './components/Button'

function App() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <Header companyName={'Nöjeshallen'} />
                </div>
                <TopNavigation />
                <div className="row">
                    <Section />
                </div>
                <Button message="Du klickade på mig" text="Klicka på mig" />
                <Footer className="footer" />
            </div>
        </>
    )
}

export default App
