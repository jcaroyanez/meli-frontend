import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { Header } from '../../compornents/Header/Header';
import { Search } from '../../compornents/Search/Search';
import { onInputValue } from './helpers-listing';
import { Container } from '../../shared/Container/Container';
import './Listing.scss';

export const Listing = () => {
  const [serachParams] = useSearchParams();
  const navigate = useNavigate();
  const query = serachParams.get('search');

  return (
    <>
      <Header>
        <Search
          inputValue={query as string}
          onInputValue={onInputValue(serachParams, navigate)}
        />
      </Header>
      <Container className="container-listing">
        <Outlet />
      </Container>
    </>
  );
};
