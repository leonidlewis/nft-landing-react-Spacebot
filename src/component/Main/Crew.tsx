import nft1 from 'assets/img/nft1.1.png'
const Crew = () => {
  return (
    <>
      <div className="nft-mainContent">
        <div className="crew-description">
          <h3>Join the crew</h3>
          <p>
            Each SpaceBot is unique and handdrawn with a variety of attributes from more
            than 10 traits, including base materials, weapons, armor pieces, and more.
          </p>
          <p>
            All SpaceBots are ready for battle, but some are rarer than others depending
            on the nature and number of attributes they include. The rarer your SpaceBot,
            the higher its ingame value will be to you as a player!
          </p>
        </div>
        <div className="crew-content">
          <img src={nft1} alt="nft1" />
        </div>
      </div>
    </>
  )
}

export default Crew
