import styled from '@emotion/styled';

export const Select = styled.select`
  padding: 8px;
  overflow: hidden;
  width: 180px;
  height: 100%;

  color: white;
  font-size: 18px;
  font-weight: 600;
  font-style: italic;

  border-radius: 3px;
  box-shadow: 0px 1px 2px -1.5px rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    200deg,
    rgba(247, 202, 201, 1) 0%,
    rgba(146, 168, 209, 1) 100%
  );
`;

export const Option = styled.option`
  color: #373737;
  background-color: #ebd8ff;

  &:hover,
  &:focus {
    color: purple;
  }
`;
