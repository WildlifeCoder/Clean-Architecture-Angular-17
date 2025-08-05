import { CoreState } from './store.reducer';
import { selectUsers } from './store.selectors';

describe('Store Selectors', () => {
  let mockState: CoreState;

  beforeEach(() => {
    mockState = {
      users: [],
    };
  });

  afterEach(() => {
    mockState = { ...mockState };
  });
  it('should select users from core state', () => {
    const users = selectUsers(mockState);
    expect(users).toEqual(mockState.users);
  });
});
