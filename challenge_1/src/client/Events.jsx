import React from 'react';

const Events = (props) => {
  return (
    <div>{
      props.events.map((event, index) => {
        return (
        <div key={index}>{event.description}</div>
        )
      })
    }</div>

  )
}


export default Events;