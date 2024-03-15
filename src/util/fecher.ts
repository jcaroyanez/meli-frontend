export async function fercher(endpoint: string, customConfig: Request) {
  const headers = {'content-type': 'application/json'}

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  } as Request;

	const response = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config);

	if(response.statusText === 'OK') {
		const data = response.json();
		return data;
	} else {
		const errorMessage = await response.text()
		return new Error(errorMessage);
	}
}