const { directory } = require('./directory');

describe('directory functionality', () => {
  it('directory takes one argument', () => {
    expect(directory.length).toEqual(1);
  });
  it('directory should return an obj', () => {
    const result = directory({ a: 1 });
    expect(typeof result).toEqual('object');
  });
  it('directory when given an data should return correct response', () => {
    const data = {
      Seb: {
        scientist: {
          Amazon: 'Peru',
          fish: [
            'swordfish',
            'snchoveta',
            'herring',
            'shad',
            'skipjack',
            'yellowfin',
          ],
        },
        birder: ['Gadwall', 'cuckoo', 'hummingbird', 'oystercatcher'],
      },
      Josie: {
        ceramicist: {
          mugs: 20,
          plates: 10,
          bowls: 5,
        },
        artist: {
          school: 'SVA',
        },
      },
    };
    expect(directory(data)).toEqual({
      'Seb/scientist/Amazon': 'Peru',
      'Seb/scientist/fish': [
        'swordfish',
        'snchoveta',
        'herring',
        'shad',
        'skipjack',
        'yellowfin',
      ],
      'Seb/birder': ['Gadwall', 'cuckoo', 'hummingbird', 'oystercatcher'],
      'Josie/ceramicist/mugs': 20,
      'Josie/ceramicist/plates': 10,
      'Josie/ceramicist/bowls': 5,
      'Josie/artist/school': 'SVA',
    });
  });
  it('directory when given an data should return correct response', () => {
    const data = {
      Murphy: {
        Location: 'New York',
        history: {
          school: ['RISD', 'Columbia', 'Rutgers'],
          jobs: {
            photographer: 'freelance',
            fabrication: [2010, 2011, 2013, 2014],
            union: [2017, 2018, 2019],
          },
        },
      },
      Benj: {
        location: 'Philly',
        children: 1,
        history: {
          school: ['Cornell'],
          jobs: {
            teacher: {
              brooklyn: [2010, 2011, 2012],
              philly: [2014, 2015, 2016],
            },
            writer: [2017, 2018, 2019],
          },
        },
      },
    };
    expect(directory(data)).toEqual({
      'Murphy/Location': 'New York',
      'Murphy/history/school': ['RISD', 'Columbia', 'Rutgers'],
      'Murphy/history/jobs/photographer': 'freelance',
      'Murphy/history/jobs/fabrication': [2010, 2011, 2013, 2014],
      'Murphy/history/jobs/union': [2017, 2018, 2019],
      'Benj/location': 'Philly',
      'Benj/children': 1,
      'Benj/history/school': ['Cornell'],
      'Benj/history/jobs/teacher/brooklyn': [2010, 2011, 2012],
      'Benj/history/jobs/teacher/philly': [2014, 2015, 2016],
      'Benj/history/jobs/writer': [2017, 2018, 2019],
    });
  });
});
