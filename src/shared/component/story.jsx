import React from 'react'
import PropTypes from 'prop-types'

import { getLocalTime } from '../util'

const Story = ({ story, rank }) => {
  const localTime = getLocalTime(story.time)
  return (
    <div className="story">
      <tr className="athing" id={story.id}>
        <td className="title">
          {rank}.
          <a href={story.url}> {story.title} </a>
        </td>
      </tr>
      <tr>
        <td className="subtext">
          <span className="score"> {story.score} points </span>
          by {story.by}
          <span className="age"> at {localTime} </span>
          | {story.descendants} comments
        </td>
      </tr>
    </div>
  )
}

Story.propTypes = {
  story: PropTypes.object.isRequired,
  rank: PropTypes.number.isRequired,
}
export default Story
