import { NavigateFunction } from 'react-router-dom';

export const onInputValue =
  (serachParams: URLSearchParams, navigate: NavigateFunction) =>
  (query: string) => {
    const params = new URLSearchParams(serachParams);
    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }

    navigate(`/items?${params.toString()}`, { replace: true });
  };
