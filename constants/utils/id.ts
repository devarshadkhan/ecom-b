import { randomBytes } from "crypto";

const id = (size: number) => randomBytes(size).toString('hex')
export default id;