import { renderWithProvider } from 'test';
import Component from 'App';
import sinon from 'sinon';
import apiClient from 'apis/apiClient';

sinon.stub(apiClient, 'get').callsFake(
  () =>
    ({
      data: {}
    } as any)
);

describe('Render component', () => {
  it('should render without crash', () => {
    const { container } = renderWithProvider(<Component />);

    expect(container).toBeTruthy();
  });
});
