export type GreeterMessage = {
	text: string
}

export const Greeter = (name: string): GreeterMessage => ({
	text: `Hello ${name}`,
})
