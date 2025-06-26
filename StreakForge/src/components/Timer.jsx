import React, { useEffect, useState } from 'react'

const Timer = ({ timeLeft }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds/60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")} : ${secs.toString().padStart(2, "0")}`
  };

  return (
    <div>
        {formatTime(timeLeft)}
    </div>
  )
}

export default Timer;