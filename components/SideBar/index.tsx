import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                url="https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh_200x200.jpg"
                name="Rocketseat"
                nickname="@rocketseat"
              />,
              <FollowSuggestion
                url="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_200x200.png"
                name="React JS"
                nickname="@reactjs"
              />,
              <FollowSuggestion
                url="https://pbs.twimg.com/profile_images/1266489802876162050/_3ICMW6D_200x200.jpg"
                name="Don L"
                nickname="@donl___"
              />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
