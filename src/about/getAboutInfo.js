export const getAboutInfo = (req, res) => {
	res.status(200).json({
		name: 'Emma Perkins',
		age: '12',
		likes: ['Singing', 'Dancing', 'Crafting'],
	})
}