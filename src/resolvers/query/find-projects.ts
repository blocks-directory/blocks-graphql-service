import { publicLambdaResolver } from '../common'

export const findProjects = publicLambdaResolver(`${process.env.stage}-blocks-service-find-projects`)
