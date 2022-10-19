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

    const { container } = renderWithProvider(<Component />);

    expect(container).toBeTruthy();
  });
  it('actions', async () => {
    jest.spyOn(slice.selectors, 'citiesSelector').mockReturnValue([
      { id: '1', name: 'SG' },
      { id: '2', name: 'SG' }
    ]);
    const fetchWeathers = jest.spyOn(slice.sagaActions, 'fetchWeathers');

    const user = userEvent.setup();
    renderWithProvider(<Component />);
    await user.type(screen.getByTestId('downshift-onChange'), 'SG');

    expect(fetchWeathers).toBeCalled();
  });
});
