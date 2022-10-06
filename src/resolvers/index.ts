import { NonEmptyArray } from 'type-graphql'
import { PingResolver } from './ping'
import { ProfileResolver } from './profile'

export const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  PingResolver,
  ProfileResolver
]
