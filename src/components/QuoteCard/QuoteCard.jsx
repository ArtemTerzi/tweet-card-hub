import { Author, Quote, QuoteCardWrapper } from './QuoteCard.styled';
import bg from 'images/quote-bg.png';

const QuoteCard = ({ quote, author }) => {
  return (
    <QuoteCardWrapper>
      <img src={bg} alt="bg" />
      <Quote>"{quote}"</Quote>
      <Author>{author}</Author>
    </QuoteCardWrapper>
  );
};

export default QuoteCard;
