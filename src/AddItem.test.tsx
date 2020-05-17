import React from 'react';
import { AddItem } from './AddItem';
import { render } from './testUtils';
import userEvent from '@testing-library/user-event';

const userTypes = (field: HTMLElement, inputValue: string) =>
  userEvent.type(field, inputValue);

const userClicks = (button: HTMLElement) => userEvent.click(button);

describe('<AddItem /> has a form for user to fill in', () => {
  it('navigates to a success page upon form submission', () => {
    const { getByRole, getByLabelText, history } = render(<AddItem />);

    const titleField = getByLabelText('Title');
    const descriptionField = getByLabelText('Description');
    const submitButton = getByRole('button');

    userTypes(titleField, 'Some title');
    userTypes(descriptionField, 'Some description');
    userClicks(submitButton);

    expect(history.location.pathname).toEqual('/add-listing-success');
  });

  it('cannot submit the form if the title and description are empty', () => {
    const { getByText, getByRole, history } = render(<AddItem />);

    const submitButton = getByRole('button');
    userClicks(submitButton);

    expect(history.location.pathname).not.toEqual('/add-listing-success');
    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
  });

  it('shows an inline prompt if title or description are empty', () => {
    const { getByText, getByRole } = render(<AddItem />);

    const submitButton = getByRole('button');

    userClicks(submitButton);

    expect(getByText('Please fill in a title')).toBeInTheDocument();
    expect(getByText('Please fill in a description')).toBeInTheDocument();
  });

  it('inline prompt clears if user types title or description', async () => {
    const { queryByText, getByRole, getByLabelText } = render(<AddItem />);

    const titleField = getByLabelText('Title');
    const descriptionField = getByLabelText('Description');
    const submitButton = getByRole('button');

    userClicks(submitButton);

    await userTypes(titleField, 'some title this time');
    expect(queryByText('Please fill in a title')).not.toBeInTheDocument();

    await userTypes(descriptionField, 'some description this time');
    expect(queryByText('Please fill in a description')).not.toBeInTheDocument();
  });
});
