
import { useQuery } from 'react-query'
import { detailFetch, itemsFetch } from '../services/items'
import { ResponseDetail, ResponseItems } from '../definitions/model';

export function useItems (textSearch: string): { data: ResponseItems | undefined, isLoading: boolean} {
  const { data, isLoading } = useQuery(['items', textSearch], () => itemsFetch(textSearch));
	return { data, isLoading }
}

export function useDetail (id: string): { data: ResponseDetail | undefined, isLoading: boolean} {
  const { data, isLoading } = useQuery(['detail', id], () => detailFetch(id));
	return { data, isLoading }
}