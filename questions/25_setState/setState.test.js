const { StatefulThing } = require('./setState');
describe('setState', () => {
  test('setState should modify the current state and return the new state', () => {
    const randomAge = Math.random() * 1000;
    const mariaProfile = {
      name: 'Maria',
      age: randomAge,
      faveIceCreamFlavor: 'strawberry',
    };

    const mariaComponent = new StatefulThing(mariaProfile);

    const newMariaProfile = mariaComponent.setState({
      faveIceCreamFlavor: 'mint chocolate chip',
    });

    expect(newMariaProfile).toEqual({
      name: 'Maria',
      age: randomAge,
      faveIceCreamFlavor: 'mint chocolate chip',
    });
  });
  test('setState should not mutate the currentState', () => {
    const fsLat = 40.705169;
    const fsLon = -74.008985;
    const fullStackLocation = { lat: fsLat, lon: fsLon };

    const currentLocationComponent = new StatefulThing(fullStackLocation);

    const newLat = Math.random() * 45;
    const newLocation = currentLocationComponent.setState({
      lat: newLat,
    });

    expect(newLocation).toEqual({ lat: newLat, lon: fsLon });
    expect(Object.is(fullStackLocation, newLocation)).toBe(false);
  });

  xdescribe('extra credit', () => {
    test('create a method goBack() that restores the previous state ', () => {
      const rng100 = () => Math.floor(Math.random() * 101);
      const initialState = { val: 1 };
      const newStates = Array(100)
        .fill('')
        .map(() => ({
          val: rng100(),
        }));

      const randomValComponent = new StatefulThing(initialState);
      newStates.forEach(newState => {
        randomValComponent.setState(newState);
      });

      for (let i = newStates.length - 1; i > 0; i -= 1) {
        randomValComponent.goBack();
        expect(randomValComponent.state).toEqual(newStates[i - 1]);
      }
    });
  });
});
