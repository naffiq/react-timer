import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import expect from 'expect';
import enzymify from 'expect-enzyme';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';


import Clock from 'Clock';

expect.extend(enzymify)

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
        var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={61}/>);
        var $el = $(ReactDOM.findDOMNode(clock));
        var actualText = $el.find('.clock-text').text();

        expect(actualText).toEqual('01:01');
    });

    it('should render clock to output with initial value', () => {
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var $el = $(ReactDOM.findDOMNode(clock));
        var actualText = $el.find('.clock-text').text();

        expect(actualText).toEqual('00:00');
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock />);

      expect(clock.formatSeconds(615)).toEqual('10:15');
    });

    it('should format seconds and minutes less than 10', () => {
        var clock = TestUtils.renderIntoDocument(<Clock />);

        expect(clock.formatSeconds(61)).toEqual('01:01');
    });

    it('should format seconds less than 10', () => {
        var clock = TestUtils.renderIntoDocument(<Clock />);

        expect(clock.formatSeconds(601)).toEqual('10:01');
    });

    it('should format minutes less than 10', () => {
        var clock = TestUtils.renderIntoDocument(<Clock />);

        expect(clock.formatSeconds(119)).toEqual('01:59');
    });
  });
});
