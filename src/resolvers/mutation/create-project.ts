import { publicLambdaResolver } from '../common'

export const createProject = publicLambdaResolver(`${process.env.stage}-blocks-service-create-project`)
