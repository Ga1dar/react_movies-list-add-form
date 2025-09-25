import { useState } from 'react';
import { TextField } from '../TextField';
import React from 'react';
import { Movie } from '../../types/Movie';

type Props = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  // Increase the count after successful form submission
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');
  // to reset touched status of all the `Field`s

  const checkTitle = (newValue: string) => {
    return setTitle(newValue);
  };

  const checkDescription = (newValue: string) => {
    return setDescription(newValue);
  };

  const checkImgUrl = (newValue: string) => {
    return setImgUrl(newValue);
  };

  const checkImdbUrl = (newValue: string) => {
    return setImdbUrl(newValue);
  };

  const checkImdbId = (newValue: string) => {
    return setImdbId(newValue);
  };

  const reqrequiredOk =
    title.trim() !== '' &&
    imgUrl.trim() !== '' &&
    imdbUrl.trim() !== '' &&
    imdbId.trim() !== '';

  const handlSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !imgUrl || !imdbUrl || !imdbId) {
      return;
    }

    onAdd({
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    });
    setTitle('');
    setDescription('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');

    return setCount(count + 1);
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handlSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={checkTitle}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={checkDescription}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={checkImgUrl}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={checkImdbUrl}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        onChange={checkImdbId}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={!reqrequiredOk}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
