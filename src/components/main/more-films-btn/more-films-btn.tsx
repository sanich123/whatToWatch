import { memo } from 'react';
import { numberOfFilms } from '../../../utils/const';
import './more-films-btn-styles.css';

interface MoreFilmsBtnProps {
  setSlicingNum: (arg: number) => void,
  slicingNum: number,
}

function MoreFilmsBtn({setSlicingNum, slicingNum}: MoreFilmsBtnProps) {
  return (
    <button
      onClick={() => setSlicingNum(slicingNum + numberOfFilms)}
      className='catalog__button'
      type="button"
      tabIndex={0}
    >Show more
    </button>
  );
}

export default memo(MoreFilmsBtn, (prev, next) => prev.slicingNum === next.slicingNum);
