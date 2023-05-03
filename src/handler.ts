export async function requestAPI<T>(
  endPoint = '',
  options: any = {}
): Promise<T> {
  const baseUrl = 'http://localhost:80/';
  const requestUrl = baseUrl.concat(endPoint);
  let method = 'GET';
  let body: any = undefined;

  if (options && options.method) {
    method = options.method;
  }

  if (options && options.body) {
    body = options.body;
  }

  let response: Response;
  try {
    response = await fetch(requestUrl, {
      method: method,
      body: body
    });
  } catch (error) {
    console.error(error);
    throw error;
  }

  let data: any = await response.text();

  if (data.length > 0) {
    try {
      data = JSON.parse(data);
    } catch (error) {
      console.log('Not a JSON response body.', response);
    }
  }

  if (!response.ok) {
    throw data.message || data;
  }

  return data;
}
