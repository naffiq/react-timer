import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

const Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },

  componentWillUnmount: function () {
    clearInterval(this.timerInterval);
  },

  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'paused':
          this.pauseTimer();
          break;
        case 'stopped':
          this.stopTimer();
          break;
      }
    }
  },

  startTimer: function () {
    this.timerInterval = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({count: newCount});
    }, 1000);

    this.setState({timerStatus: 'started'});
  },

  pauseTimer: function () {
    clearInterval(this.timerInterval);
  },

  stopTimer: function () {
    this.pauseTimer();
    this.setState({count: 0});
  },

  handleStatusChange: function (status) {
    this.setState({
      timerStatus: status
    });
  },

  render: function () {
    let {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="text-center page-title">Timer</h1>

        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
