import './text-area-styles.css';

export default function TextArea({setText}: {setText: (evt: string) => void}): JSX.Element {

  return (
    <div className="add-review__text">
      <textarea
        className="add-review__textarea"
        onChange={({target}) => setText(target.value)} name="review-text"
        id="review-text"
        placeholder="Review text"
      />
      <div className="add-review__submit">
        <button className="add-review__btn" type="submit">Post</button>
      </div>
    </div>
  );
}
