import './tags.css';

interface TagProps {
  item: string;
}

function Tags({ item }: TagProps) {
  return <span className="tag">{item}</span>;
}

export default Tags;
