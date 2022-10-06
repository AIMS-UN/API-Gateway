import { NonEmptyArray } from 'type-graphql'
import { PingResolver } from './ping'
import { GradingResolver } from './grading'
import { ProfileResolver } from './profile'

export const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  PingResolver,
  GradingResolver,
  ProfileResolver
]
