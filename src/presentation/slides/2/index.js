import React from 'react';
import CodeSlide from 'spectacle-code-slide';
// import Code from '../../../assets/code.example';

export default (
  /* eslint-disable import/no-webpack-loader-syntax */
  <CodeSlide
    bgColor="#002833"
    color="white"
    transition={["spin"]}
    lang="js"
    code={require("raw-loader!../../../assets/code/jscode")}
    ranges={[
      { loc: [0, 270], title: "Walking through some code" },
      { loc: [0, 1], title: "The Beginning" },
      { loc: [1, 2] },
      { loc: [1, 2], note: "Heres a note!" },
      { loc: [2, 3] },
      { loc: [5, 10] },
    ]}/>
  /* eslint-enable import/no-webpack-loader-syntax */
);
