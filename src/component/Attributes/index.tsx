import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import mainImg from 'assets/img/landing.png'
import { spacebotList, countAttributeList, allBotList } from 'constants/mockup'
import BotList from './BotList'
import Footer from '../Footer'

const Attributes = () => {
  const classes = useStyles()
  return (
    <>
      <img src={mainImg} alt="landingImg" className={classes.landingImg} />
      <div className="attribute-container">
        <div className="attribute-header">
          <h1>ATTRIBUTES</h1>
          <p>
            All badgers are bold, but some are rarer than others depending on the nature
            and number
          </p>
          <p> of attributes they bear. </p>
        </div>
        <div className="attribute-spacebot-type">
          <h3>Spacebots Type</h3>
          <div className="attribute-spacebot-nft">
            {spacebotList.map((item, index) => {
              return (
                <BotList
                  avatar={item.avatar}
                  text={item.text}
                  key={`spacebot-${index}`}
                />
              )
            })}
          </div>
        </div>
        <div className="attribute-spacebot-count">
          <h3>Spacebots Attribute Count</h3>
          <div className="attribute-count-nft">
            {countAttributeList.map((item, index) => {
              return (
                <BotList
                  avatar={item.avatar}
                  text={item.text}
                  key={`spacebot-${index}`}
                />
              )
            })}
          </div>
        </div>
        <div className="attribute-spacebots">
          <h3>Spacebots Attribute</h3>
          <div className="attribute-nft">
            {allBotList.map((item, index) => {
              return (
                <BotList
                  avatar={item.avatar}
                  text={item.text}
                  key={`spacebot-${index}`}
                  allType={true}
                />
              )
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
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
export default Attributes
