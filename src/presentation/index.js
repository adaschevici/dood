import React, { Component } from 'react';
import { Deck, Slide } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Terminal from 'spectacle-terminal';
import '../prism-themes/themes/prism-nova.css';
import preloader from "spectacle/lib/utils/preloader";

const importSlides = [
  import('./slides/1'),
  import('./slides/4'),
  import('./slides/2'),
  import('./slides/3'),
];

// const images = {
//   demoImage: require('../assets/tim-gouw-68319-unsplash.jpg'),
// };
// 
// preloader(images);

const theme = {};

export default class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: Array(importSlides.length).fill(<Slide key="loading" />), // placeholder for slides once they're loaded
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(importSlides)
      .then(resolvedSlides => {
        resolvedSlides.forEach(slide => {
          importedSlides.push(slide.default);
        });
        this.setState({ slides: importedSlides });
      });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck transition={["slide", "zoom"]} transitionDuration={500} progress="pacman">
        {slides.map((slide, index) => React.cloneElement(slide, { key: index }))}
      </Deck>
    );
  }
}
