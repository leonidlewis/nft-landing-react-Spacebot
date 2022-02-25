import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import nft1 from 'assets/img/nft1.png'
import nft2 from 'assets/img/nft2.png'
import nft3 from 'assets/img/nft3.png'
import nft4 from 'assets/img/nft4.png'
import nft5 from 'assets/img/nft5.png'
import { nftList } from 'constants/mockup'
import { CryptoColor } from 'constants/color'
import { useKeenSlider } from 'keen-slider/react'
import useWindowDimensions from '../../Hook/useWindowsDimention'
import 'keen-slider/keen-slider.min.css'
const Nft = () => {
  const classes = useStyles()
  const [pause, setPause] = React.useState(false)
  const [delay, setdelay] = React.useState(2000)
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const { height, width } = useWindowDimensions()

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(max-width: 800px)': {
        slidesPerView: 3,
        centered: true,
        spacing: 20,
        duration: 5000,
        dragStart: () => {
          setPause(true)
        },
        dragEnd: () => {
          setPause(false)
        },
      },
    },
    slidesPerView: 5,
    mode: 'free-snap',
    centered: true,
    // spacing: 10,
    loop: true,
    duration: 3000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
    slideChanged: (slider) => {
      setCurrentSlide(slider.details().relativeSlide)
      console.log('slider==>', slider.details().relativeSlide)
    },
  })

  React.useEffect(() => {
    window.setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, delay)
    return () => {
      window.clearInterval()
    }
  }, [pause, slider])

  React.useEffect(() => {
    if (width < 800) {
      setdelay(5000)
    } else {
      setdelay(3000)
    }
  }, [width])

  return (
    <div className="nft-container">
      <div className="nft-content">
        <div ref={sliderRef} className="keen-slider slidebar">
          {nftList.map((item, index) => {
            const activeSlider = currentSlide === index ? 'active' : 'inactive'
            return (
              <div className={`keen-slider__slide slideItem ${activeSlider}`}>
                <img src={nft2} alt="nft2" className="nft-image" />
              </div>
            )
          })}
        </div>
      </div>
      <div className="nft-background" />
    </div>
  )
}
const useStyles = makeStyles({})
export default Nft
