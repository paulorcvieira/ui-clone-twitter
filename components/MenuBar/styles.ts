import styled, { css } from 'styled-components';

import {
  HomeCircle,
  Hashtag,
  Notifications,
  Email,
  Heart,
  BookmarkOutline,
  Person,
  ArrowIosDownwardOutline,
  FileList2,
  BlurCircular,
  QuillPen,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled.img`
  width: 33px;
  height: 33px;

  > path {
    fill: var(--white);
  }

  margin-bottom: 20px;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }

    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 14.5px;
  }

  & + button:last-child {
    margin-top: 18.3px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(HomeCircle)`
  ${iconCSS}
`;

export const HastagIcon = styled(Hashtag)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;

export const FavoriteIcon = styled(Heart)`
  ${iconCSS}
`;

export const BookmarkIcon = styled(BookmarkOutline)`
  ${iconCSS}
`;

export const ListIcon = styled(FileList2)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const MoreIcon = styled(BlurCircular)`
  ${iconCSS}
`;

export const PenIcon = styled(QuillPen)`
  ${iconCSS}
`;

export const Botside = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  border-radius: 25px;
  padding: 10px;

  @media (min-width: 1280px) {

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const Avatar = styled.img`
  width: 39px;
  height: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ArrowIosDownwardOutline)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;
  }
`;
