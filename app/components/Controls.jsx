import React from 'react';

const CountdownControls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  },

  render: function () {
    let {countdownStatus} = this.props;

    let renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return (
          <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
        );
      } else if (countdownStatus === 'paused') {
        return (
          <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
        );
      }
    };

    return (
      <div className="expanded button-group">
        {renderStartStopButton()}
        <button className="alert button hollow" type="button" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = CountdownControls;