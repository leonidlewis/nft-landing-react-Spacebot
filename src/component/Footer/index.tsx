import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { PATRON, POPPINS } from 'constants/font'
import { socialIconList } from 'constants/mockup'
import { CryptoColor } from 'constants/color'

const Footer = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.footerContainer}>
        <p>Follow the News of The Spacebots</p>
        <div className={classes.socialIconContainer}>
          {socialIconList.map((item, index) => {
            return (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a href="#" key={`social-${index}`}>
                <img src={`/assets/img/${item}.png`} alt="social" width="24" />
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}
const useStyles = makeStyles({
  footerContainer: {
    height: 175,
    backgroundColor: '#0E1F41',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& p': {
      color: CryptoColor.WHITE,
      fontSize: 14,
      FontFamily: POPPINS,
    },
  },
  socialIconContainer: {
    display: 'grid',
    gridColumnGap: 12,
    gridTemplateColumns: 'auto auto auto auto auto',
  },
})
export default Footer
