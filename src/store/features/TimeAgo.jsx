import { formatDistanceToNow, parseISO } from 'date-fns';
import React from 'react'

const TimeAgo = ({timestamp}) => {
    let timeAgo = '';
    if(timestamp){
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`
    }
  return (
    <div>
      <span>
      Posted on :   &nbsp; <i>{timeAgo}</i>
      </span>
    </div>
  )
}

export default TimeAgo
