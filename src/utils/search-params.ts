const QUERY_KEY = 'query';

export function getQueryParam() {
  const searchParams = new URLSearchParams(location.search);

  return searchParams.get(QUERY_KEY);
}

export function setQueryParam(query: string) {
  const url = new URL(location.href);

  url.searchParams.set(QUERY_KEY, query);

  history.pushState(null, '', url);
}

export function deleteQueryParam() {
  const url = new URL(location.href);

  url.searchParams.delete(QUERY_KEY);
  history.pushState(null, '', url);
}
