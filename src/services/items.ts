import { URL_BASE_API } from '../definitions/constants'
import { ResponseDetail, ResponseItems } from '../definitions/model';
import { fetcher } from '../util/fetcher';

export async function itemsFetch (query: string): Promise<ResponseItems> {
    const response = await fetcher<ResponseItems>(`${URL_BASE_API}?q=${query}`);
		return response;
}

export async function detailFetch(id: string): Promise<ResponseDetail> {
	const response = await fetcher<ResponseDetail>(`${URL_BASE_API}/${id}`);
	return response;
}