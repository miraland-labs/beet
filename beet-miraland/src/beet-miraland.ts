import { SupportedTypeDefinition } from '@miraplex/beet'
import { KeysExports, keysTypeMap, KeysTypeMapKey } from './keys'

export * from './keys'
export * from './gpa'

/**
 * @category TypeDefinition
 */
export type BeetMiralandTypeMapKey = KeysTypeMapKey
/**
 * @category TypeDefinition
 */
export type BeetMiralandExports = KeysExports

/**
 * Maps miraland beet exports to metadata which describes in which package it
 * is defined as well as which TypeScript type is used to represent the
 * deserialized value in JavaScript.
 *
 * @category TypeDefinition
 */
export const supportedTypeMap: Record<
  BeetMiralandTypeMapKey,
  SupportedTypeDefinition & {
    beet: BeetMiralandExports
  }
> = keysTypeMap
