import React from 'react'
import './topicBox.css'
import Content from './Content'

export default function TopicBox(props) {
  

  return (
    <div>
      <div className="topicBox">
        <sapan className="span">My favaurite food {props.food} and its price is{props.price}</sapan>
        {props.children}
      </div>

      
    </div>
  )
}
