import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { POPPINSBOLD } from 'constants/font'
import { CryptoColor } from 'constants/color'
import { RoadmapList } from 'constants/mockup'
import Road from './Road'
const Roadmap = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.roadmapContainer}>
        <h3>Roadmap</h3>
        <div className="roadmap">
          {RoadmapList.map((data, index) => {
            return (
              <Road
                key={`road-${index}`}
                title={data.title}
                content={data.content}
                position={data.position}
                icon={data.icon}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
const useStyles = makeStyles({
  roadmapContainer: {
    marginTop: 70,
    paddingBottom: 70,
    '& h3': {
      textTransform: 'uppercase',
      color: CryptoColor.YELLOW,
      fontSize: 30,
      fontWeight: '700',
      fontFamily: POPPINSBOLD,
      margin: 0,
    },
  },
})
export default Roadmap
