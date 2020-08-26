import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tabs = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
`;

export const TabList = styled.li`
  width: 100%;
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--gray);
  border-bottom: 1px solid var(--gray);

  &:hover {
    background: var(--twitter-dark-hover);
    color: var(--twitter);
  }

  &.active {
    border-bottom: 2.3px solid var(--twitter);
    color: var(--twitter);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
