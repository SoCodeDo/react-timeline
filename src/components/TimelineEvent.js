import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <article className = 'timeline-event'>
      <h3>{props.person}</h3>
      <Timestamp time = {props.timeStamp}/>
      <p>{props.status}</p>
    </article>
  );
}

export default TimelineEvent;