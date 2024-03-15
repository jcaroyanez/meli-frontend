
import { useQuery } from 'react-query'
import { itemsFetch } from '../services/items'
import { ResponseItems } from '../definitions/mode';

export function useItems (textSearch: string): { data: ResponseItems | undefined, isLoading: boolean} {
  const { data, isLoading } = useQuery(['items', textSearch], () => itemsFetch(textSearch));
	return { data, isLoading }
}
