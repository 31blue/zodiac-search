import Search from '/Frame.svg';
import './search-form.css';
import { deleteQueryParam, setQueryParam } from '@/utils/search-params';
import { useState } from 'react';

interface SearchFormProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const getQueryString = () => decodeURIComponent(location.href);

const convertQueryString = (queryArray: string[]) =>
  queryArray.filter(Boolean).join(' ').trim();

function SearchForm({ query, setQuery }: SearchFormProps) {
  const [queryString, setQueryString] = useState(getQueryString);

  const words = query
    .split(' ')
    .filter(Boolean)
    .map((word) => word.toLowerCase().trim());

  const handleSearch = () => {
    if (words.length > 0) {
      setQueryParam(convertQueryString(words));
      setQueryString(getQueryString);
    } else {
      deleteQueryParam();
    }
  };

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  return (
    <form className="search-bar" action={handleSearch}>
      <label htmlFor="search" className="sr-only">
        사용자 검색창
      </label>

      <input
        type="search"
        id="search"
        className="search"
        placeholder="별자리"
        value={query}
        onChange={handleQuery}
      />
      <img src={Search} alt="검색창 돋보기" />
    </form>
  );
}

export default SearchForm;
