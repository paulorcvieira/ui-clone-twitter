import styled, { css } from 'styled-components';

import {
  PinOutline,
  Calendar3,
  MoreHorizontal,
  Mail,
  Verified
} from '../../styles/Icons';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background: var(--twitter);
  background-image: url('https://source.unsplash.com/collection/7822920/600x200');
  background-repeat: no-repeat;
  object-fit: cover;
  transform: translate(0, 0);

  position: relative;
`;

export const Avatar = styled.img`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }

  > ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    margin: 10px 0;

    > li {
      font-size: 15px;
      color: var(--gray);

      & + li {
        margin-left: 10px;
      }

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const VerifyIcon = styled(Verified)`
  width: 19px;
  height: 19px;
`;

export const MoreIcon = styled(MoreHorizontal)`
  width: 20px;
  height: 20px;

  > circle {
    color: var(--twitter);
  }
`;

export const MailIcon = styled(Mail)`
  width: 20px;
  height: 20px;

  > path, polyline {
    color: var(--twitter);
  }
`;

export const LocationIcon = styled(PinOutline)`
  ${iconCSS}
`;

export const CalendarIcon = styled(Calendar3)`
  ${iconCSS}

  width: 16px;
  height: 16px;
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

export const MoreButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 207px;

  padding: 4px 0;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

export const MailButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 140px;

  padding: 4px 0;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;
