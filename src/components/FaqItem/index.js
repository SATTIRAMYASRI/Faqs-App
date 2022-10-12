// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachfaq, showingValuesList, onplusMinusBtnClick} = props
  const {id, questionText, answerText} = eachfaq
  const isShowingAnswer = showingValuesList.includes(id)
  const faqImg = isShowingAnswer
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const faqImgAltText = isShowingAnswer ? 'minus' : 'plus'

  const plusMinusBtn = () => {
    onplusMinusBtnClick(id)
  }

  return (
    <li className="faqItem-bg-container">
      <div className="faqItem-heading-container">
        <h1 className="faqItem-heading">{questionText}</h1>
        <div className="faqItem-img-container">
          <img
            src={faqImg}
            className="faqItem-img"
            alt={faqImgAltText}
            onClick={plusMinusBtn}
          />
        </div>
      </div>
      {isShowingAnswer ? (
        <div>
          <hr className="answer-line" />
          <p className="answer">{answerText}</p>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}

export default FaqItem
