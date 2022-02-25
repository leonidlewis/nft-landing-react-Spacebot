import { useState } from 'react'

const BotList = (props: { avatar: string; text: string; allType?: boolean }) => {
  const { avatar, text, allType } = props
  return (
    <>
      <div className="bot-container">
        <img src={`/assets/img/${avatar}.png`} alt="card" />
        {allType ? (
          <div className="bot-decription-all">
            <p>{text}</p>
          </div>
        ) : (
          <div className="bot-description">
            <p>{text}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default BotList
