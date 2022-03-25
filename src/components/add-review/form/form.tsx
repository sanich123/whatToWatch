import { useEffect, useState, memo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { usePostCommentMutation } from '../../../store/slices/films-api/films-api';
import { serverPath } from '../../../utils/const';
import { errorHandler } from '../../../utils/utils';

import FormRating from '../form-rating/form-rating';
import TextArea from '../form-text/text-area';

export function ReviewForm() {
  const selected: { id: string } = useParams();
  const history = useHistory();
  const [sendComment, { isSuccess, error, isLoading: isCommentSending }] =
      usePostCommentMutation();

  const [text, setText] = useState('Review text');
  const [rating, setRating] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (isCommentSending) {
      setDisabled(true);
    }
    if (isSuccess) {
      setDisabled(false);
      history.push(`/${serverPath.films}/${selected.id}`);
    }
    if (error) {
      setDisabled(false);
      errorHandler(error);
    }
  }, [history, selected.id, isSuccess, isCommentSending, error]);

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    setDisabled(true);
    await sendComment({
      body: {
        rating: +rating,
        comment: text,
      },
      id: selected.id,
    }).unwrap();
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <FormRating disabled={disabled} setRating={setRating} />
      <TextArea
        disabled={disabled}
        text={text}
        rating={rating}
        setText={setText}
      />
    </form>
  );
}

export default memo(ReviewForm);
