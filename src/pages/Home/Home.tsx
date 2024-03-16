import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { onInputValue } from './helpers-home';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Search onInputValue={onInputValue(navigate)} />
      </Header>
    </>
  );
};
