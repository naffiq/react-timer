import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

const Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    };
  },

  handleSetCountDown: function (seconds) {
    this.setState({
      count: seconds
    });
  },

  render: function () {
    let {count} = this.state;

    return (
      <div>
        <h1 className="text-center page-title">Countdown</h1>

        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountDown}/>
      </div>
    );
  }
});

module.exports = Countdown;
