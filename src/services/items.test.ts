import { fetcher } from '../util/fetcher';
import { detailFetch, itemsFetch } from './items';

jest.mock('../util/fetcher', () => ({
  fetcher: jest.fn(),
  detailFetch: jest.fn(),
}));

describe('Item service', () => {
  it('should call [itemsFetch] then call fetcher and send correct params', async () => {
    (fetcher as jest.Mock).mockResolvedValue(
      new Promise((resolve) => resolve({})),
    );

    await itemsFetch('test');

    expect(fetcher).toHaveBeenCalled();
    expect(fetcher).toHaveBeenCalledWith(
      'http://localhost:8080/api/items?q=test',
    );
  });

  it('should call [detailFetch] then call fetcher and send correct params', async () => {
    (fetcher as jest.Mock).mockResolvedValue(
      new Promise((resolve) => resolve({})),
    );

    await detailFetch('1234');

    expect(fetcher).toHaveBeenCalled();
    expect(fetcher).toHaveBeenCalledWith(
      'http://localhost:8080/api/items/1234',
    );
  });
});
