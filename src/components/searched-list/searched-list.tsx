import { type UserInfo } from '@/data/card/type';
import Card from '../card/card';
import './searched-list.css';

interface SearchedListProps {
  list: UserInfo[];
  query: string;
}

function SearchedList({ list, query }: SearchedListProps) {
  const words = query
    .split(' ')
    .filter(Boolean)
    .map((word) => word.toLowerCase().trim());

  const filteredList = list.filter((item) =>
    words.every(
      (word) =>
        item.name.toLowerCase().includes(word) || item.tags.includes(word)
    )
  );

  const isEmpty = filteredList.length === 0;

  return (
    <div className="searched-list">
      {isEmpty && (
        <p>&ldquo;{query}&ldquo; 라는 명칭의 별자리는 존재하지 않습니다.</p>
      )}

      {!isEmpty &&
        filteredList.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
}

export default SearchedList;
