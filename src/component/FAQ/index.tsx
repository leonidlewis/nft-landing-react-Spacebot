import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { PATRON, POPPINS } from 'constants/font'
import { CryptoColor } from 'constants/color'
import { faqList } from 'constants/mockup'
import Footer from '../Footer'
import mainImg from 'assets/img/landing.png'

import FaqList from './FaqList'
const FAQ = () => {
  const classes = useStyles()
  return (
    <div>
      <img src={mainImg} alt="landingImg" className={classes.landingImg} />
      <div className="faq-list-container">
        <h1> FAQ </h1>
        <div className="faq-list">
          {faqList.map((item, index) => {
            return (
              <FaqList title={item.title} content={item.content} key={`index-${index}`} />
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

const useStyles = makeStyles({
  landingImg: {
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
})
export default FAQ
