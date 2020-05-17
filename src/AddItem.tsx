import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';

export function AddItem(): ReactElement {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleValidationError, setTitleValidationError] = useState(false);
  const [descriptionValidationError, setDescriptionValidationError] = useState(
    false
  );
  const history = useHistory();

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (!title) {
      setTitleValidationError(true);
    }

    if (!description) {
      setDescriptionValidationError(true);
    }

    if (title && description) {
      history.push('/add-listing-success');
    }
  }

  function clearInlinePrompts(attribute: string) {
    switch (attribute) {
      case 'title':
        setTitleValidationError(false);
        break;
      case 'description':
        setDescriptionValidationError(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        {titleValidationError && (
          <p data-id='titleValidationError'>Please fill in a title</p>
        )}
        <input
          type='text'
          name='title'
          onChange={(e) => {
            setTitle(e.target.value);
            clearInlinePrompts('title');
          }}
        />
      </label>
      <label>
        Description
        {descriptionValidationError && <p>Please fill in a description</p>}
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
            clearInlinePrompts('description');
          }}
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}
