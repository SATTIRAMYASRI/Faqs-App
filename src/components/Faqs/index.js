// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {showingValuesList: []}

  onplusMinusBtnClick = id => {
    const {showingValuesList} = this.state
    const idInList = showingValuesList.includes(id)
    if (idInList === false) {
      this.setState(prevState => ({
        showingValuesList: [...prevState.showingValuesList, id],
      }))
    } else {
      const idRemovedList = showingValuesList.filter(eachId => eachId !== id)
      this.setState({
        showingValuesList: [...idRemovedList],
      })
    }
  }

  render() {
    const {faqsList} = this.props
    const {showingValuesList} = this.state

    console.log(showingValuesList)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="faq-heading">FAQs</h1>
          <ul className="ul-container">
            {faqsList.map(eachfaq => (
              <FaqItem
                eachfaq={eachfaq}
                key={eachfaq.id}
                showingValuesList={showingValuesList}
                onplusMinusBtnClick={this.onplusMinusBtnClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
