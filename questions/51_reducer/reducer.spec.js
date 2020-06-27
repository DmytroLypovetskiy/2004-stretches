const { types, initialState, reducer } = require('./reducer');
describe('reducer stretch', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: types.ADD_TODO,
        text: 'Run the tests',
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      },
    ]);

    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        {
          type: types.ADD_TODO,
          text: 'Run the tests',
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1,
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });
  it('should handle DELETE_TODO', () => {
    expect(
      reducer(
        [
          {
            text: 'Write HTML',
            completed: false,
            id: 1,
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        {
          type: types.DELETE_TODO,
          id: 1,
        }
      )
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });
  it('should handle COMPLETE_TODO', () => {
    expect(
      reducer(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 1,
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        {
          type: types.COMPLETE_TODO,
          id: 0,
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1,
      },
      {
        text: 'Use Redux',
        completed: true,
        id: 0,
      },
    ]);
  });
});
