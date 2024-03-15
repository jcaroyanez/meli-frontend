import { URL_BASE_API } from '../definitions/constants'
import { ResponseItems } from '../definitions/mode';
import { fetcher } from '../util/fecher'

export async function itemsFetch (query: string): Promise<ResponseItems> {
    const response = await fetcher<ResponseItems>(`${URL_BASE_API}?q=${query}`);
		return response;
}