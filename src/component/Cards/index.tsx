import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { PATRON, POPPINS } from 'constants/font'

import Card from '../Card'
import { CardList } from 'constants/mockup'
import { CryptoColor } from 'constants/color'
const Cards = () => {
  const classes = useStyles()
  return (
    <>
      <div className="spaceBot">
        <div className="card-description">
          <h3>SpaceBots, suit up and get ready.</h3>
          <p>
            SpaceBots are all completely handdrawn, each one is unique, and there is only
          </p>
          <p>9,999 of them. Create a part of SpacePort history and get yours now.</p>
        </div>
        <div className="cards-container">
          {CardList.map((oneCard, index) => {
            return <Card key={`card-${index}`} icon={oneCard.icon} text={oneCard.text} />
          })}
        </div>
      </div>
    </>
  )
}
const useStyles = makeStyles({})
export default Cards
