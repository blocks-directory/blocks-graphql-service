import * as AWS from 'aws-sdk'
import { memoize } from 'lodash-es'

export const getLambda = memoize(() => new AWS.Lambda())
