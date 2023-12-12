import Button from '../components/Button'
import { useRef, useState } from 'react'

const Contact = () => {
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()

    const setFokusOnInput = useRef()

    const focusInput = () => {
        setFokusOnInput.current.focus()
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted', email, subject, message)
    }

    return (
        <>
            <section>
                <div className="row">
                    <div className="col-9">
                        <h2>Kontakta oss</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="name@example.com"
                                    onChange={handleEmailChange}
                                    autoFocus
                                    ref={setFokusOnInput}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label">
                                    Ämne
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    placeholder="Här anger du vad ditt ärende gäller"
                                    onChange={handleSubjectChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Meddelande
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="3"
                                    placeholder="Här beskriver du vad du funderar över"
                                    onChange={handleMessageChange}
                                ></textarea>
                            </div>

                            <Button
                                className="btn btn-primary"
                                text="Skicka meddelande"
                                onClick={() => {
                                    focusInput
                                    {
                                        /**window.location.reload()*/
                                    }
                                }}
                            />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact
