const { getStudent } = require('./getstudents');
const mockAxios = require('./axios');
const studentData = require('./studentData');

describe('getStudents functionality', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('getStudent takes one argument called name and throws error if not string', () => {
    expect(getStudent.length).toEqual(1);
    expect(() => getStudent(1)).toThrow();
  });
  it('getStudent uses axios to call api and returns student count and student info', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: studentData,
      })
    );
    const student = await getStudent('Shruti');
    expect(student).toEqual({
      count: 14,
      student: {
        name: 'Shruti',
        favoriteColor: 'gold',
      },
    });
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://fullstack.com/api/cohort2004'
    );
  });
  it('getStudent returns count and "no student found" if student not found', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: studentData,
      })
    );
    const student = await getStudent('joey');
    expect(student).toEqual({
      count: 14,
      student: 'no student found',
    });
  });
  it('getStudent catches errors', async () => {
    mockAxios.get.mockRejectedValueOnce('error');
    return expect(getStudent('JoeyCool')).rejects.toEqual(new Error('error'));
  });
});
