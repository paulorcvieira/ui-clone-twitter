import React from 'react';

import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  HastagIcon,
  BellIcon,
  EmailIcon,
  BookmarkIcon,
  ListIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
  MoreIcon,
  PenIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo src="./twitter.svg" />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <HastagIcon />
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <BookmarkIcon />
          <span>Itens salvos</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>Lista</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <MenuButton>
          <MoreIcon />
          <span>Mais</span>
        </MenuButton>

        <Button>
          <PenIcon />
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar src="https://github.com/paulorcvieira.png" />

        <ProfileData>
          <strong>Paulo Vieira</strong>
          <span>@paulorcvieira</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
