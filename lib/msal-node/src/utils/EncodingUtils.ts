/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

export class EncodingUtils {
    /**
     * 'utf8': Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
     * 'base64': Base64 encoding.
     *
     * @param str text
     */
    static base64Encode(str: string): string {
        return Buffer.from(str, 'utf8').toString('base64');
    }

    /**
     * encode a URL
     * @param str
     */
    static base64EncodeUrl(str: string): string {
         return EncodingUtils.base64Encode(str)
             .replace(/=/g, '')
             .replace(/\+/g, '-')
             .replace(/\//g, '_');
    }

    /**
     * 'utf8': Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
     * 'base64': Base64 encoding.
     *
     * @param base64Str Base64 encoded text
    */
    static base64Decode(base64Str: string): string {
        return Buffer.from(base64Str, 'base64').toString('utf8');
    }

    /**
     * @param base64Str Base64 encoded Url
    */
    static base64DecodeUrl(base64Str: string): string {
        let str = base64Str.replace(/-/g, '+').replace(/_/g, '/');
        while (str.length % 4) {
            str += '=';
        }
        return EncodingUtils.base64Decode(str);
    }
}