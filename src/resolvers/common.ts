import { getLambda } from '../aws.utils'
import { checkError } from '../utils'

export const publicLambdaResolver = (lambdaName: string) => async (obj: any, args: any) => {
  const lambda = getLambda()

  const invokeLambdaResult = await lambda.invoke({
    FunctionName: lambdaName,
    Payload: JSON.stringify({
      ...args,
    }),
  }).promise()

  const parsedResponse = JSON.parse(invokeLambdaResult.Payload!.toString())

  checkError(parsedResponse)

  return parsedResponse
}
