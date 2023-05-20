import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 380px;
  height: 460px;

  background: linear-gradient(115deg, #471ca9 -1%, #5736a3 54%, #4b2a99 79%);
  box-shadow: -3px 7px 21px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  transition: all 0.3s;

  &::before {
    content: '';
    position: absolute;
    width: 380px;
    height: 8px;
    left: 0px;
    top: 214px;

    background: #ebd8ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 3px #ae7be3,
      inset 0px 4px 3px #fbf8ff;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 3px #ae7be3,
      inset 0px 4px 3px #fbf8ff;
    scale: 1.04;
  }
`;

export const Logo = styled.img`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;
`;

export const CardPicture = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
`;

export const AvaBorder = styled.img`
  position: absolute;
  z-index: 1;
  width: 90px;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const UserAvatar = styled.img`
  position: absolute;
  width: 63px;
  height: 63px;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

export const UserName = styled.p`
  position: absolute;
  height: 24px;
  left: 50%;
  top: 264px;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  width: 100%;
  text-align: center;
  transform: translateX(-50%);

  color: #ebd8ff;
`;

export const TweetCountsText = styled.p`
  position: absolute;
  height: 24px;
  left: 50%;
  top: 300px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  transform: translateX(-50%);

  color: #ebd8ff;
`;

export const FollowersCountsText = styled.p`
  position: absolute;
  height: 24px;
  left: 50%;
  top: 336px;

  width: 100%;
  text-align: center;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;

  transform: translateX(-50%);
`;

export const FollowButton = styled.button`
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;

  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  background: #ebd8ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    scale: 1.15;
  }
`;

export const FollowingButton = styled.button`
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  background: #5cd3a8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    scale: 1.15;
  }
`;
