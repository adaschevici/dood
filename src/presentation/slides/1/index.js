import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

export default (
  <Slide transition={["spin"]} bgColor="primary">
    <Appear>
      <div>
      <Heading size={6} textColor="primary" caps>Typography</Heading>
      <Heading size={1} textColor="secondary">Heading 1</Heading>
    </div>
    </Appear>
    <Heading size={2} textColor="secondary">Heading 2</Heading>
    <Heading size={3} textColor="secondary">Heading 3</Heading>
    <Heading size={4} textColor="secondary">Heading 4</Heading>
    <Heading size={5} textColor="secondary">Heading 5</Heading>
    <Text size={6} textColor="secondary">Standard text</Text>
  </Slide>
);
