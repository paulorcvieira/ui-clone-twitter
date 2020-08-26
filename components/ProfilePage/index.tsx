import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  MoreIcon,
  MailIcon,
  LocationIcon,
  CalendarIcon,
  VerifyIcon,
  Followage,
  MoreButton,
  MailButton,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar src="https://github.com/paulorcvieira.png" />
      </Banner>

      <ProfileData>
        <MoreButton outlined><MoreIcon /></MoreButton>
        <MailButton outlined><MailIcon /></MailButton>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Paulo Vieira <VerifyIcon /></h1>
        <h2>@paulorcvieira</h2>

        <p>
          Developer at <a href="https://github.com/paulorcvieira">@BlackTag</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Brasil
          </li>
          <li>
            <CalendarIcon />
            Ingressou em dezembro de 2017
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>96</strong>
          </span>
          <span>
            <strong>633 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
