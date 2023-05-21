import QuoteCard from 'components/QuoteCard';
import { quotes } from 'constants/contants';
import { QuotesList } from './HomePage.styled';

const HomePage = () => {
  return (
    <main>
      <QuotesList>
        {quotes.map(quote => {
          return (
            <li key={quote.id}>
              <QuoteCard {...quote} />
            </li>
          );
        })}
      </QuotesList>
    </main>
  );
};

export default HomePage;
