import { map } from 'lodash-es'
import {
  Types,
  Query,
  Mutation,
} from './schemas'

export default [
  'scalar JSON',
  ...map(Types),
  Query,
  Mutation,
]
