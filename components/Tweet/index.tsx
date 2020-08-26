import React from 'react';

import {
  Container,
  Retweeted,
  RetweetIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
  ShareIcon,
  VerifyIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar src="https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh_200x200.jpg" />

        <Content>
          <Header>
            <strong>Rocketseat  <VerifyIcon /></strong>
            <span>@rocketseat</span>
            <Dot />
            <time>26 de ago</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Foguete não tem ré 🚀</Description>

          <ImageContent src="https://source.unsplash.com/collection/9586529/800x600" />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              19
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
            <Status>
              <ShareIcon />
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
