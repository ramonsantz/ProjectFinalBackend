import { isValidEmail, isValidPrice, isValidTitle } from '../validationHelper';

describe('Validation Helper', () => {
  test('should validate valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
  });

  test('should validate valid price', () => {
    expect(isValidPrice(10)).toBe(true);
    expect(isValidPrice(0)).toBe(false);
  });

  test('should validate valid title', () => {
    expect(isValidTitle('Book Title')).toBe(true);
    expect(isValidTitle('No')).toBe(false);
  });
});
