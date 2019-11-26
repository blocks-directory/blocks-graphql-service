import { map } from 'lodash-es'
import {
  Query,
  Types,
} from './schemas'

export default [
  'scalar JSON',
  ...map(Types),
  Query,
]
