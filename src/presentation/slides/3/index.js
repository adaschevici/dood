import React from 'react';
import { Slide, Heading } from 'spectacle';
import Terminal from 'spectacle-terminal';

export default (
  <Slide transition={[ "spin", "slide" ]} bgColor="primary">
    <Heading size={ 2 } caps fit textColor="tertiary">Terminal</Heading>
    <Terminal title="1. zero@localhost: ~(zsh)" output={[
      "npm test",
      <div style={{ color: "#33B969"}}>TOTAL: 174 SUCCESS</div>,
      <div>
        <div>=============================== Coverage summary ===============================</div>
        <div style={{ color: "#DEC612"}}>Statements   : 51.29% ( 278/542 )</div>
        <div style={{ color: "#EE5057"}}>Branches     : 38.78% ( 95/245 )</div>
        <div style={{ color: "#EE5057"}}>Functions    : 46.21% ( 61/132 )</div>
        <div style={{ color: "#DEC612"}}>Lines        : 52.69% ( 274/520 )</div>
        <div>================================================================================</div>
      </div>]}
    />
  </Slide>
);
