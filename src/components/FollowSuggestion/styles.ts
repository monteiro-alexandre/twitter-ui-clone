import styled from 'styled-components';

import ProfileImage from '../../assets/profile.jpg';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const User = styled.div`
  display: flex;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;

  background-image: url(${ProfileImage});
  background-size: contain;

  border-radius: 50%;

  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)`
  padding: 6px 17px;
`;
