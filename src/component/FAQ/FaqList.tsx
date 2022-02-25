import { useState } from 'react'
import questionIcon from 'assets/img/question.png'
import collapeIn from 'assets/img/arrowup.png'
import collapeOut from 'assets/img/arrowdown.png'

const FaqList = (props: { title: string; content: string }) => {
  const [isShow, setIsShow] = useState(false)
  const { title, content } = props
  const handleShow = () => {
    setIsShow(!isShow)
  }
  return (
    <>
      <div className="faq-container">
        <div className="faq-header">
          <img src={questionIcon} alt="question" />
          <p>{title}</p>
          <button type="button" onClick={handleShow}>
            {isShow ? (
              <img src={collapeIn} alt="show content" />
            ) : (
              <img src={collapeOut} alt="show content" />
            )}
          </button>
        </div>
        {isShow && (
          <div className="faq-content">
            <p>{content}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default FaqList
