import { PublicKey } from '@solarti/web3.js'
import {
  FixedSizeBeet,
  fixedSizeUint8Array,
  SupportedTypeDefinition,
} from '@miraplex/beet'
const BEET_MIRALAND_PACKAGE = '@miraplex/beet-miraland'
const MIRALAND_WEB3_PACKAGE = '@solarti/web3.js'

const uint8Array32 = fixedSizeUint8Array(32)

/**
 * De/Serializer for miraland {@link PublicKey}s aka `publicKey`.
 *
 *
 * ## Using PublicKey Directly
 *
 * ```ts
 * import { publicKey } from '@miraplex/beet-miraland'
 *
 * const generatedKey  = Keypair.generate().publicKey
 * const buf = Buffer.alloc(publicKey.byteSize)
 * beet.write(buf, 0, generatedKey)
 * beet.read(buf, 0) // same as generatedKey
 * ```
 *
 * ## PublicKey as part of a Struct Configuration
 *
 * ```ts
 * import { publicKey } from '@miraplex/beet-miraland'
 *
 * type InstructionArgs = {
 *   authority: web3.PublicKey
 * }
 *
 * const createStruct = new beet.BeetArgsStruct<InstructionArgs>(
 *   [
 *     ['authority', publicKey]
 *   ],
 *   'InstructionArgs'
 * )
 * ```
 *
 * @category beet/miraland
 */
export const publicKey: FixedSizeBeet<PublicKey> = {
  write: function (buf: Buffer, offset: number, value: PublicKey): void {
    const arr = value.toBytes()
    uint8Array32.write(buf, offset, arr)
  },
  read: function (buf: Buffer, offset: number): PublicKey {
    const bytes = uint8Array32.read(buf, offset)
    return new PublicKey(bytes)
  },

  byteSize: uint8Array32.byteSize,
  description: 'PublicKey',
}

/**
 * @category TypeDefinition
 */
export type KeysExports = keyof typeof import('./keys')
/**
 * @category TypeDefinition
 */
export type KeysTypeMapKey = 'publicKey'
/**
 * @category TypeDefinition
 */
export type KeysTypeMap = Record<
  KeysTypeMapKey,
  SupportedTypeDefinition & { beet: KeysExports }
>

/**
 * Maps miraland keys beet exports to metadata which describes in which package it
 * is defined as well as which TypeScript type is used to represent the
 * deserialized value in JavaScript.
 *
 * @category TypeDefinition
 */
export const keysTypeMap: KeysTypeMap = {
  publicKey: {
    beet: 'publicKey',
    isFixable: false,
    sourcePack: BEET_MIRALAND_PACKAGE,
    ts: 'PublicKey',
    pack: MIRALAND_WEB3_PACKAGE,
  },
}
