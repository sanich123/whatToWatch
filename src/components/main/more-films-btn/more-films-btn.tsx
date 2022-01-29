import { numberOfFilms } from '../../../utils/const';
import './more-films-btn-styles.css';

interface MoreFilmsBtnProps {
  setSlicingNum: (arg: number) => void,
  slicingNum: number,
}

export default function MoreFilmsBtn({setSlicingNum, slicingNum}: MoreFilmsBtnProps): JSX.Element {
  return (
    <button onClick={() => setSlicingNum(slicingNum + numberOfFilms)} className='catalog__button' type="button">Show more</button>
  );
}
