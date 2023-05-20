import styled from '@emotion/styled';

export const LoadMore = styled.button`
  display: block;
  background-color: #5736a3;
  border-radius: 8px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin: 0 auto 15px auto;
  max-width: 250px;
  min-width: 180px;
  padding: 8px 16px;
  text-align: center;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;
