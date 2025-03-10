import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <ul className="timeline-event">
      
      <div className="event-person">
        {props.person}
      </div>
      <div className="event-status">
        {props.status}
      </div>

      <div className="event-time">
        <Timestamp time={props.timeStamp}/>
      </div>
    </ul>
  );
}

export default TimelineEvent;
