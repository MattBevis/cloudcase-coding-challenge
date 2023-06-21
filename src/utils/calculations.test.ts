// Import the necessary testing framework or use your preferred testing library
import {expect, test} from "vitest"
import { calculateSuper, calculateTax } from './calculations';

// Test cases for calculateTax function
test('calculateTax should return 0 for salary less than 1', () => {
  const result = calculateTax(0);
  expect(result).toBe(0);
});

test('calculateTax should calculate tax correctly for salary less than 37,001', () => {
  const result = calculateTax(25000);
  expect(result).toBe(1292);
});

test('calculateTax should calculate tax correctly for salary less than 90,001', () => {
  const result = calculateTax(55000);
  expect(result).toBe(9422);
});

test('calculateTax should calculate tax correctly for salary less than 180,001', () => {
  const result = calculateTax(110000);
  expect(result).toBe(28197);
});

test('calculateTax should calculate tax correctly for salary greater than or equal to 180,001', () => {
  const result = calculateTax(230000);
  expect(result).toBe(76597);
});

// Test cases for calculateSuper function
test('calculateSuper should calculate super correctly', () => {
  const result = calculateSuper(230000);
  expect(result).toBe(24150);
});
