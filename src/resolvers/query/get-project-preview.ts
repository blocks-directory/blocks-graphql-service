import { publicLambdaResolver } from '../common'

export const getProjectPreview = publicLambdaResolver(`${process.env.stage}-blocks-service-get-project-preview`)
