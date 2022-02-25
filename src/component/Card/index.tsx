import { makeStyles } from '@material-ui/core/styles'
import { CryptoColor } from 'constants/color'

const Card = (props: { icon: any; text: any }) => {
  const classes = useStyles()
  const { icon, text } = props
  return (
    <div className="card-container">
      <img src={`/assets/img/${icon}.png`} alt="card" />
      <div className={classes.cardContent}>
        <p>{text}</p>
      </div>
    </div>
  )
}
const useStyles = makeStyles({
  cardContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #2855AC',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 165,
    boxSizing: 'border-box',
    padding: 20,
  },
  cardContent: {
    '& p': {
      color: CryptoColor.WHITE,
      fontSize: 10,
      fontWeight: 500,
    },
  },
})
export default Card
