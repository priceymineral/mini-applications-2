import React from 'react';

const Events = (props) => {
  return (
    <div>{
      props.events.map((event, index) => {
        return (
          <div key={index}>
            Year:
            <div>{event.date}</div>
            Description:
            <div>{event.description}</div>
            Language:
            <div>{event.lang}</div>
            Category 1:
            <div>{event.category1}</div>
            Category 2:
            <div>{event.category2}</div>
            Granularity:
            <div>{event.granularity}</div>
            /**************************************************/
          </div>
        )
      })
    }</div>

  )
}


export default Events;