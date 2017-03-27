import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

const Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped',
      countdownInterval: null
    };
  },

  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },

  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;

        case 'stopped':
          this.stopTimer();
        case 'paused':
          this.pauseTimer();
          break;

        default:
          break;
      }
    }

    if (this.state.count !== prevState.count && this.state.countdownStatus !== 'stopped') {
      if (this.state.count === 0) {
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }
  },

  startTimer: function () {
    let countdownInterval = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({count: newCount > 0 ? newCount : 0});
    }, 1000);

    this.setState({
      countdownInterval: countdownInterval
    });
  },

  stopTimer: function () {
    this.setState({count: 0});
  },

  pauseTimer: function () {
    clearInterval(this.state.countdownInterval);
  },

  handleStatusChange: function (status) {
    this.setState({countdownStatus: status});
  },

  render: function () {
    let {count, countdownStatus} = this.state;

    let renderFormOrControls = () => {
      if (countdownStatus === 'stopped') {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      } else {
        return <Controls onStatusChange={this.handleStatusChange} countdownStatus={countdownStatus}/>;
      }
    };

    return (
      <div>
        <h1 className="text-center page-title">Countdown</h1>

        <Clock totalSeconds={count}/>
        { renderFormOrControls() }
      </div>
    );
  }
});

module.exports = Countdown;
