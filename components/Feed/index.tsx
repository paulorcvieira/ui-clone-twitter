import React from 'react';

import Tweet from '../Tweet';

import { Container, Tabs, TabList, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tabs>
        <TabList className="active">Tweets</TabList>
        <TabList>Tweets e respostas</TabList>
        <TabList>Mídia</TabList>
        <TabList>Curtidas</TabList>
      </Tabs>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;
