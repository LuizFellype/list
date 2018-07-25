import { upper } from './Upper'

test('should transforme the whole string in upper Case', () => {
    expect(upper('string')).toBe('STRING')
})