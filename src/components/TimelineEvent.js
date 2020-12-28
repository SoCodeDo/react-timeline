import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <article className = 'timeline-event'>
      <h3 className = 'event-person'>{props.person}</h3>
      <Timestamp time = {props.timeStamp}/>
      <p className = 'event-status'>{props.status}</p>
    </article>
  );
}

export default TimelineEvent;