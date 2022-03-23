import { genres } from '../../../../utils/const';
import Filter from '../filter/filter';

interface FiltersListProps {
  setFilter: (arg: string) => void,
  filter: string
}
export default function FiltersList({ setFilter, filter }: FiltersListProps) {

  return (
    <ul className="catalog__genres-list">
      {Object.entries(genres).map(([genre, value]) => (
        <Filter
          setFilter={setFilter}
          filter={filter}
          key={genre}
          name={genre}
          title={value}
        />
      ))}
    </ul>
  );
}
