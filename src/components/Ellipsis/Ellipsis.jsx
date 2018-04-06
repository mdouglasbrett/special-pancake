// @flow
import React from 'react';
import './Ellipsis.css'

const STYLE_PREFIX = 'c-ellipsis';

const Dot = <svg viewBox="0 0 100 100" fill="#fff"><circle cx="50" cy="50" r="30" /></svg>;

const Ellipsis = () => (
  <div className="c-ellipsis c-ellipsis--small c-ellipsis--fast">
    <div>{Dot}</div>
    <div>{Dot}</div>
    <div>{Dot}</div>
  </div>
);

export default Ellipsis;
