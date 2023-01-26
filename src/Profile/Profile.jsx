import React from 'react'
import { ReactPropTypes } from 'react'

export default function Profile({name,bio,profession}) {
  return (
      <div>
        <h1>{name}</h1>
        <p>{bio}</p>
        <span>{profession}</span>
      </div>
  )
}
