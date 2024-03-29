import request from 'supertest'
import { DataSource } from 'typeorm'
import app from '../../src/app'
import { AppDataSource } from '../../src/config/data-source'

describe('POST /auth/login', () => {
    let connection: DataSource

    beforeAll(async () => {
        connection = await AppDataSource.initialize()
    })

    beforeEach(async () => {
        // database drop and sync
        await connection.dropDatabase()
        await connection.synchronize()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    describe('Given all fields', () => {
        it('should login the user', async () => {
            // Arrange
            const userData = {
                email: 'architjain798@gmail.com',
                password: 'test@123',
            }
            const userCreateData = {
                firstName: 'Archit',
                lastName: 'Jain',
                ...userData,
            }
            // Act
            await request(app).post('/auth/register').send(userCreateData)
            const response = await request(app)
                .post('/auth/login')
                .send(userData)

            // Assert
            expect(response.statusCode).toBe(200)
        })
    })
})
