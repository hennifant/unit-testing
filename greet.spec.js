import { greet } from './greet.js';

describe('greet', () => {
  it('returns a String "Hello <name>!" if called with greet("Jane")', () => {
    const result = greet('Jane');
    expect(result).toBe('Hello Jane!');
  });

  it('returns "Hello coach!" if called greet("Jerry")', () => {
    const result = greet('Jerry');
    expect(result).toBe('Hello coach!');
  });

  it('returns "Hello coach!" if called greet("Paul")', () => {
    const result = greet('Paul');
    expect(result).toBe('Hello coach!');
  });

  it('returns "Hello coach!" if called greet("Mareike")', () => {
    const result = greet('Mareike');
    expect(result).toBe('Hello coach!');
  });
});
