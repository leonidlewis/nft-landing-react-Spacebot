import React from 'react'
import mainImg from 'assets/img/landing.png'
import { makeStyles } from '@material-ui/core/styles'
import { PATRON, POPPINS } from 'constants/font'
import { CryptoColor } from 'constants/color'

const Welcome = () => {
  const classes = useStyles()
  return (
    <>
      <img src={mainImg} alt="landingImg" className={classes.landingImg} />
      <div className="main-content">
        <h1>
          WELCOME TO THE <br />
          CREW
        </h1>
        <p>
          These SpaceBots are a collections of 10,000 HandDrawn unique SpaceBot NFTs
          having real
        </p>
        <p> utility in collaboration with SpacePort Arcade. Each SpaceBot will</p>
        <p> provide in game benefits in SpacePort Arcade and are one of a kind. </p>
        <h4> Mint your own SpaceBot below, remember, yours is one of a kind. </h4>
        <button className={classes.mintBtn}>Mint your NFT</button>
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
    zIndex: 1,
  },
  mintBtn: {
    fontSize: 14,
    fontWeight: 600,
    fontFamily: POPPINS,
    textAlign: 'center',
    width: 200,
    height: 40,
    borderRadius: 29,
    background: CryptoColor.GYELLOW,
    color: CryptoColor.WHITE,
    border: 'none',
  },
})
export default Welcome
