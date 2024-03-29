// import createError from 'http-errors'
import app from './app'
import { Config } from './config'
import { AppDataSource } from './config/data-source'
import logger from './config/logger'

const startServer = async () => {
    const PORT = Config.PORT
    try {
        // const err = createError(401, 'Please login to view this page.')
        // throw err
        // throw new Error('Something went wrong')
        await AppDataSource.initialize()
        logger.info('Database connected success')
        logger.debug('debug message', {})
        app.listen(PORT, () => {
            logger.info(`New Server is running on port ${PORT}`)
        })
    } catch (error) {
        if (error instanceof Error) {
            logger.error(error.message)
            setTimeout(() => {
                process.exit(1)
            }, 1000)
        }
    }
}

void startServer()
