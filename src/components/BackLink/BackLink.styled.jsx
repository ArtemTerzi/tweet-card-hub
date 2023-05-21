import styled from '@emotion/styled';

export const Button = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  padding: 8px 24px;
  color: #471ca9;

  background: #ebd8ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    scale: 1.15;
  }

  & a {
    text-decoration: none;
  }
`;
