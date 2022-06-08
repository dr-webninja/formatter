import { Greeter } from '../index'
test('My Greeter', () => {
	expect(Greeter('Carl')).toEqual({ text: 'Hello Carl' })
})
