export async function fetcher<T>(endpoint: string, customConfig = {} as Request): Promise<T> {
  const headers = {'content-type': 'application/json'}

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig?.headers,
    },
  } as Request;

	const response = await fetch(endpoint, config);

	if(response.statusText === 'OK') {
		const data = response.json();
		return data;
	} else {
		const errorMessage = await response.text()
		throw new Error(errorMessage);
	}
}