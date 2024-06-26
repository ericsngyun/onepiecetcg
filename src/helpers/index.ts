import crypto from 'crypto'

const SECRET = 'ERIC-REST_API'

export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt: string | undefined | null, password: string) => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex')
}

