import React from 'react'
import TopicBox from '../components/TopicBox'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <TopicBox food='Kottu' price='950/='>
        <span>This is the description</span>
        </TopicBox>
        
      <TopicBox food='Rice' price='1000/='>
      <button type='submit'>Save</button>
      </TopicBox>

      <TopicBox food='Hoppers' price='300/='/>
    </div>
  )
}
