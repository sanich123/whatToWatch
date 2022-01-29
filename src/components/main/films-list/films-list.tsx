import { Film } from '../../../types/types';
import Card from '../../card/card';
import './films-list-styles.css';

export default function FilmsList({films}: {films: Film[]}): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map(({id, ...rest}) => <Card key={id} id={id} {...rest} />)}
    </div>
  );
}
