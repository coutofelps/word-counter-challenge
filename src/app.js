import './app.css'
import { useEffect, useState } from 'react'

export default function Application() {
    const [currentStep, setCurrentStep] = useState(1)
    const [textValue, setTextValue] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [wordCount, setWordCount] = useState(0)

    useEffect(() => {
        document.title = 'Word Counter Challenge'
      }, [])

    const handleCountButtonClick = (event) => {
        event.preventDefault()

        if (textValue.trim() === '') {
            setErrorMessage('Please enter at least one word.')
        } else {
            setErrorMessage('')
            setCurrentStep(2)
            countWords(textValue)
        }
    }

    const countWords = (text) => {
        const words = text.trim().split(/\s+/) // Split the text into words using whitespace as delimiters

        setWordCount(words.length)
    }

    const handleResetButtonClick = () => {
        setCurrentStep(1)
        setTextValue('')
        setErrorMessage('')
        setWordCount(0)
    }

    return (
        <>
            <div className='formbold-main-wrapper'>
                <div className='formbold-form-wrapper'>
                    <form>
                        <div className='formbold-steps'>
                            <ul>
                                <li className={`formbold-step-menu1 ${currentStep === 1 ? 'active' : ''}`}>
                                    <span>1</span>
                                    Typing text
                                </li>
                                <li className={`formbold-step-menu2 ${currentStep === 2 ? 'active' : ''}`}>
                                    <span>2</span>
                                    Counting words
                                </li>
                            </ul>
                        </div>

                        <div className={`formbold-form-step-1 ${currentStep === 1 ? 'active' : ''}`}>
                            <div>
                                <label className='formbold-form-label'>Type your text</label>
                                <textarea rows={6} name='text' id='text' value={textValue} onChange={(e) => setTextValue(e.target.value)} placeholder='Type your text here' className='formbold-form-input'></textarea>
                            </div>

                            {errorMessage && <p className='error-message'>{errorMessage}</p>}
                        </div>

                        <div className={`formbold-form-step-2 ${currentStep === 2 ? 'active' : ''}`}>
                            <div>
                                <label className='success-message'>Your text has {wordCount} words.</label>
                            </div>
                        </div>

                        <div className='formbold-form-btn-wrapper'>
                            {currentStep === 1 && (
                                <button id='countButton' className='formbold-btn' onClick={handleCountButtonClick}>
                                    Count
                                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                                        <g clip-path='url(#clip0_1675_1807)'>
                                            <path d='M10.7814 7.33312L7.20541 3.75712L8.14808 2.81445L13.3334 7.99979L8.14808 13.1851L7.20541 12.2425L10.7814 8.66645H2.66675V7.33312H10.7814Z' fill='white'></path>
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_1675_1807'>
                                                <rect width='16' height='16' fill='white'></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            )}
                            {currentStep === 2 && (
                                <button className='formbold-btn' onClick={handleResetButtonClick}>
                                    Reset
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
