import createHttpError from 'http-errors'
import { Repository } from 'typeorm'
import { Roles } from '../constants'
import bcrypt from 'bcrypt'
import { User } from '../entity/User'
import { UserData } from '../types'

export class UserService {
    constructor(private userRepository: Repository<User>) {}

    async create({ firstName, lastName, email, password }: UserData) {
        const user = await this.userRepository.findOne({
            where: {
                email: email,
            },
        })
        if (user) {
            const err = createHttpError(400, 'Email is already present')
            throw err
        }

        // Logic for hashing the password
        const saltRound = 10
        const hashedPassword = await bcrypt.hash(password, saltRound)

        try {
            return await this.userRepository.save({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                role: Roles.CUSTOMER,
            })
        } catch (err) {
            const error = createHttpError(
                500,
                'Failed to store the data in the datacenter',
            )
            throw error
        }
    }

    async findByEmail(email: string) {
        try {
            return await this.userRepository.findOne({
                where: {
                    email: email,
                },
            })
        } catch (err) {
            const error = createHttpError(
                500,
                'Error while reading private key',
            )
            throw error
        }
    }

    async findById(id: number) {
        try {
            return await this.userRepository.findOne({
                where: {
                    id: id,
                },
            })
        } catch (err) {
            const error = createHttpError(
                500,
                'Error while reading private key',
            )
            throw error
        }
    }
}
