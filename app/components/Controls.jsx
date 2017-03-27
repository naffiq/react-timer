import React from 'react';

const CountdownControls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },

  render: function () {
    let {countdownStatus} = this.props;

    let renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return (
          <button className="button secondary" onClick={this.props.onToggleCountdown}>Pause</button>
        );
      } else if (countdownStatus === 'paused') {
        return (
          <button className="button primary" onClick={this.props.onToggleCountdown}>Start</button>
        );
      }
    };

    return (
      <div className="expanded button-group">
        {renderStartStopButton()}
        <button className="alert button hollow" type="button" onClick={this.props.onClearCountdown}>Clear</button>
      </div>
    );
  }
});

module.exports = CountdownControls;