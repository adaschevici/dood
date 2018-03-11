import React from 'react';
import { Slide, Heading, Text, Appear, CodePane } from 'spectacle';
import styles from './style.scss';

  console.log(styles);

/* eslint-disable */
export default (
  <Slide transition={["spin"]} bgColor="primary">
    <CodePane
      lang="js"
      source={require("raw-loader!../../../assets/code/jscode")}
    />
  </Slide>
);
