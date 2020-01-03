import { publicLambdaResolver } from '../common'

export const submitProject = publicLambdaResolver(`${process.env.stage}-blocks-service-submit-project`)
