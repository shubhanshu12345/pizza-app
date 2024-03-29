import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Config } from '.'
import { User } from '../entity/User'
import { RefreshToken } from '../entity/RefreshToken'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: Config.DB_HOST,
    port: Number(Config.DB_PORT),
    username: Config.DB_USERNAME,
    password: Config.DB_PASSWORD,
    database: Config.DB_NAME,
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUP61ShR8tdaezRpWiXtwWesaG/qwwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvZDViMWViMDQtZjNjMC00OTBiLTk3NTMtNzE4MWI0Nzcx
MWIxIFByb2plY3QgQ0EwHhcNMjMxMTEyMDg0OTMxWhcNMzMxMTA5MDg0OTMxWjA6
MTgwNgYDVQQDDC9kNWIxZWIwNC1mM2MwLTQ5MGItOTc1My03MTgxYjQ3NzExYjEg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBANJTwPFF
hB7YWCB7oZA1TufVH61aUsE0vq9pib00Qs4bN1yoltGXPsVyvXpvGP0UYFMzufty
s3m407LRZboXVrnOluU0jh297AdE622a05IcABI835hMloYyJfyQtU5dpDfcpb0F
FOcL2gtouyZWDxK4f07hhqyHaCt2BABObKH9MfhqppaisNtu6/1X8a6VA/dKiloI
mz0MviQieyWbJPgNrOH419YRhwSja49sRBvFc1NjTqEIkvSvV6lmBJXUtNlNWHNv
R6USUYQ4D1Dbgv6nMce8217c/JJ09PVHC5NAKIhnY2yb5JI27CyBQhK3HetqZaW3
HziuHsN4G7EgRgi5sa5BBQ7p7AIYkeRWzWGZIfXozvhzplqTIwJGqXL3dhPEB6kK
tvRBvcUkApc1i7Fat1KnvZjWuHij6ecpzprWhmq34dAw8p/F2f6x0TMlPbJEVGIr
HRZbtQQNaNoocSnBLDY8LrUUOiraLODzqhP1TDZbHQPSXlD8Juwm8TjdwQIDAQAB
oz8wPTAdBgNVHQ4EFgQU9p+IiTip7EZF+QAXnMVhRHjzkcQwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAA+zk5yxK23mO4yP
KBsAfVK5GA7cYyMGWFY2lno6ZlB9a0tX42hZXj6MxOJrYUdDXCRAOp+66kU6yIpg
nZcyj91bBDXyyuyFJp4qXdiQSq2xOVabxD64td+AZzxPQRALSBccTE8xIUUCt6HD
H+H37iQUpzOmvfk5Cn8UeO8/p7WAYDGZ9Xrrzs8KZ/r1rU8ndSc56r/OgvI57aGu
LQQzwdFsDYTUk9MH9T330SBRrLZv2VFoMkD0Pkn+d87HMjLnUOsOfJDoh9HtcJJj
rxcPO9ux5Q87fWFV3uiTF556Qok4nAeq3Ck+cs+IMdTfbRrLwuzXwTUasWeI5d6B
nNe+jK5due8oqD/5KhVuRHSXC0G/1TT0+0JH/zhDzzeq5A/17HdKQs/84WTldXxH
zPQO/6oDozRRvozpl1AbzkxT3zEZtURsIl6U5PLpK6cox5ugldcKhNC3Ee3AuADG
ixFo8djVZKeIO6iczEVR0oLWkIJ5NNm6riI1E060EPaXi7d3WA==
-----END CERTIFICATE-----`,
    },
    // disable synchronize when in prod to be false
    synchronize: true,
    logging: false,
    entities: [User, RefreshToken],
    migrations: [],
    subscribers: [],
})
