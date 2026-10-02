const { calculateGrade, processOrder } = require('../src/grade');

describe('Grade Calculator', () => {
  test('A untuk 90-100', () => {
    expect(calculateGrade(95)).toBe('A');
    expect(calculateGrade(90)).toBe('A');
  });

  test('B untuk 80-89', () => {
    expect(calculateGrade(85)).toBe('B');
  });

  test('C untuk 70-79', () => {
    expect(calculateGrade(75)).toBe('C');
  });

  test('D untuk 60-69', () => {
    expect(calculateGrade(65)).toBe('D');
  });

  test('E untuk < 60', () => {
    expect(calculateGrade(50)).toBe('E');
  });

  test('Error untuk invalid score', () => {
    expect(() => calculateGrade(-1)).toThrow();
    expect(() => calculateGrade(101)).toThrow();
  });
});

describe('Process Order', () => {
  test('Order normal tanpa diskon', () => {
    expect(processOrder(100, false, 2)).toBe(200);
  });

  test('Order member saja', () => {
    expect(processOrder(100, true, 2)).toBe(180);
  });

  test('Order grosir (quantity >= 10) bukan member', () => {
    expect(processOrder(100, false, 10)).toBe(950);
  });

  test('Order member + grosir', () => {
    expect(processOrder(100, true, 10)).toBe(855);
  });

  test('Error untuk input bernilai 0 atau negatif', () => {
    expect(() => processOrder(0, true, 5)).toThrow();
    expect(() => processOrder(100, true, 0)).toThrow();
  });
});