import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid black;
  padding: 15px 0;
`;

export const FooterDescription = styled.p`
  font-size: 20px;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    color: #5cd3a8;
  }
`;

export const UAWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UAText = styled.p`
  width: 100px;
`;

export const UAImg = styled.img`
  width: 100px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.a`
  transition: all 0.3s;

  &:hover {
    fill: #5cd3a8;
    scale: 1.3;
  }
`;
