import { renderHook } from '@testing-library/react';
import { useDistricts } from '../useDistricts'; 

jest.mock('../../data/districts.json', () => ({
  Lima: {},
  Callao: {},
  Miraflores: {},
}));

describe('useDistricts', () => {
  it('should return the list of districts', () => {
    const { result } = renderHook(() => useDistricts());
    expect(result.current).toEqual(['Lima', 'Callao', 'Miraflores']);
  });
});
