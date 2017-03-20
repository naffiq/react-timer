import React from 'react';

var Clock = React.createClass({

  formatSeconds: (totalSeconds) => {
    let seconds = '0' + totalSeconds % 60;
    let minutes = '0' + Math.floor(totalSeconds / 60);

    return `${minutes.substr(-2)}:${seconds.substr(-2)}`;
  },

  render: () => {
    return (
      <div className="clock">
      </div>
    );
  }
});

module.exports = Clock;
