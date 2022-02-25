import Welcome from './Welcome'
import Nft from './Nft'
import Crew from './Crew'
import Cards from '../Cards'
import Roadmap from '../Roadmap'
import Footer from '../Footer'
import { CryptoColor } from 'constants/color'

const Main = () => {
  return (
    <>
      <Welcome />
      <Nft />
      <Crew />
      <Cards />
      <Roadmap />
      <Footer />
    </>
  )
}
export default Main
