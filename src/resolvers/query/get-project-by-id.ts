import { publicLambdaResolver } from '../common'

export const getProjectById = publicLambdaResolver(`${process.env.stage}-blocks-service-get-project-by-id`)
