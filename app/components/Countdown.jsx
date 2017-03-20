import React from 'react';
import Clock from 'Clock';

var Countdown = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Countdown</h1>

      <Clock totalSeconds={62}/>
    </div>
  );
};

module.exports = Countdown;
