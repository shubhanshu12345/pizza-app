import fs from 'fs'
import rsaPemToJwk from 'rsa-pem-to-jwk'
import path from 'path'

const privateKey = fs.readFileSync(path.join('./certs/private.pem'))

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const jwk = rsaPemToJwk(privateKey, { use: 'sig' }, 'public')

console.log(JSON.stringify(jwk))
