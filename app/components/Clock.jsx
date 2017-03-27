import React from 'react';

const Clock = React.createClass({
  propTypes: {
    totalSeconds: React.PropTypes.number
  },

  getDefaultProps: () => {
      return {
        totalSeconds: 0
      };
  },

  formatSeconds: (totalSeconds) => {
    let seconds = '0' + totalSeconds % 60;
    let minutes = '0' + Math.floor(totalSeconds / 60);

    return `${minutes.substr(-2)}:${seconds.substr(-2)}`;
  },

  render: function () {
    let {totalSeconds} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
