import express from 'express'
import { json } from 'body-parser'
import { getAboutInfo } from './about/getAboutInfo'

export const start = async () => {
	console.log('STARTING')
	const app = express()

	app.use(json())

	app.get('/api/about', getAboutInfo)
	
	app.get('/api/client/requests')

	return app
}