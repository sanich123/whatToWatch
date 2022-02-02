import './text-area-styles.css';

interface TextAreaProps {
  text: string,
  rating: string,
  setText: (evt: string) => void,
  disabled: boolean,
}

export default function TextArea({setText, rating, text, disabled}: TextAreaProps): JSX.Element {

  return (
    <div className="add-review__text">
      <textarea
        className="add-review__textarea"
        onChange={({target}) => setText(target.value)}
        name="review-text"
        id="review-text"
        placeholder="Review text"
        disabled={disabled}
      />
      <div className="add-review__submit">
        <button
          className="add-review__btn"
          disabled={text.length < 40 || text.length > 500 || !rating}
          type="submit"
        >Post
        </button>
      </div>
    </div>
  );
}
