import { renderWithProvider, screen, waitFor } from 'test';
import Component from '.';
import userEvent from '@testing-library/user-event';
import * as slice from 'pages/HomePage/slice';
import apiClient from 'apis/apiClient';
import sinon from 'sinon';

sinon.stub(apiClient, 'get').callsFake(() =>
  Promise.resolve({
    data: [{}]
  } as any)
);

describe('Render component', () => {
  it('should render without crash', () => {
    const spyOnSelect = jest.fn();
    jest.spyOn(slice.selectors, 'citiesSelector').mockReturnValue([
      { id: '1', name: 'SG' },
      { id: '2', name: 'HCM' }
    ]);

    const { container } = renderWithProvider(<Component onSelect={spyOnSelect} />);

    expect(container).toBeTruthy();
  });
  it('actions', async () => {
    jest.spyOn(slice.selectors, 'citiesSelector').mockReturnValue([
      { id: '1', name: 'SG' },
      { id: '2', name: 'SG' }
    ]);

    const user = userEvent.setup();
    const spyOnSelect = jest.fn();
    renderWithProvider(<Component onSelect={spyOnSelect} />);
    await user.type(screen.getByTestId('downshift-onChange'), 'SG');

    expect(spyOnSelect).toBeCalled();
  });
});
