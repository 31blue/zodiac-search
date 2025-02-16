import SearchForm from '@/components/search-form/search-form';
import SearchedList from '@/components/searched-list/searched-list';
import './card-search-list.css';
import users from '@/data/card/card';
import { type UserInfo } from '@/data/card/type';
import { useEffect, useState } from 'react';
import { getQueryParam } from '@/utils/search-params';

const getQueryState = () => getQueryParam() ?? '';

function CardSearchList() {
  const [userList] = useState<UserInfo[]>(users);
  const [query, setQuery] = useState(getQueryState);

  useEffect(() => {
    const handlePopState = () => {
      setQuery(getQueryState);
    };

    globalThis.addEventListener('popstate', handlePopState);

    return () => {
      globalThis.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div className="card-search-list">
      <SearchForm query={query} setQuery={setQuery} />
      <div className="card-list">
        <SearchedList list={userList} query={query} />
      </div>
    </div>
  );
}

export default CardSearchList;
