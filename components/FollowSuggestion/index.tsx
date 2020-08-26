import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  url: string;
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ url, name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar src={url} />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
