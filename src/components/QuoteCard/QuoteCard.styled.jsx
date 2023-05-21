import styled from '@emotion/styled';

export const QuoteCardWrapper = styled.div`
  position: relative;
  width: 380px;
  height: 380px;

  & img {
    border-radius: 20px;
    border: 1px solid purple;
  }
`;

export const Quote = styled.p`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;

  width: 300px;
  font-style: italic;
  font-size: 24px;

  transform: translate(-50%, -50%);
`;

export const Author = styled.p`
  position: absolute;
  z-index: 1;
  bottom: 10%;
  right: 10%;

  width: 300px;
  font-style: italic;
  font-size: 28px;
`;
