import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Clock from 'Clock';

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
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
