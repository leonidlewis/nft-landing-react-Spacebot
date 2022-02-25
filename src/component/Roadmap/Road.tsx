import React from 'react'

const Road = (props: {
  title: string
  content: string
  position: string
  icon: string
}) => {
  const { title, content, position, icon } = props
  return (
    <div className={`container ${position}`}>
      <div className="content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      {position === 'left' ? (
        <img
          src={`/assets/img/${icon}.png`}
          alt="roadmap"
          className="roadmap-left-icon"
        />
      ) : (
        <img
          src={`/assets/img/${icon}.png`}
          alt="roadmap"
          className="roadmap-right-icon"
        />
      )}
    </div>
  )
}

export default Road
