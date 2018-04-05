// @flow
import React from 'react';
import './Ellipsis.css'

const STYLE_PREFIX = 'c-ellipsis';

const Dot = <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" /></svg>;

const Ellipsis = () => (
  <div className="c-ellipsis c-ellipsis--small c-ellipsis--white">
    <div>{Dot}</div>
    <div>{Dot}</div>
    <div>{Dot}</div>
  </div>
);

export default Ellipsis;
