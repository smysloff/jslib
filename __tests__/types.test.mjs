/* file: __tests__/types.test.mjs */

/* imports */
import Type from '../src/TypeChecker.mjs'
import Tests from '../src/Tests.mjs'

/* constants */
const tests = new Tests()

/* isNull */
tests.run('isNull', Type.isNull, undefined,         'false')
tests.run('isNull', Type.isNull, null,              'true')
tests.run('isNull', Type.isNull, 0,                 'false')
tests.run('isNull', Type.isNull, -5,                'false')
tests.run('isNull', Type.isNull, 5,                 'false')
tests.run('isNull', Type.isNull, 2.5,               'false')
tests.run('isNull', Type.isNull, -2.5,              'false')
tests.run('isNull', Type.isNull, Infinity,          'false')
tests.run('isNull', Type.isNull, -Infinity,         'false')
tests.run('isNull', Type.isNull, '',                'false')
tests.run('isNull', Type.isNull, '    ',            'false')
tests.run('isNull', Type.isNull, 'hello world',     'false')
tests.run('isNull', Type.isNull, '  abc',           'false')
tests.run('isNull', Type.isNull, '0',               'false')
tests.run('isNull', Type.isNull, '2.5',             'false')
tests.run('isNull', Type.isNull, {},                'false')
tests.run('isNull', Type.isNull, { name: 'Bobby' }, 'false')
tests.run('isNull', Type.isNull, () => {},          'false')
tests.run('isNull', Type.isNull, async () => {},    'false')
tests.run('isNull', Type.isNull, [],                'false')
tests.run('isNull', Type.isNull, [1, 2, 3, 4, 5],   'false')
tests.run('isNull', Type.isNull, false,             'false')
tests.run('isNull', Type.isNull, true,              'false')
tests.run('isNull', Type.isNull, new Map(),         'false')

/* isUndefined */
tests.run('isUndefined', Type.isUndefined, undefined,         'true')
tests.run('isUndefined', Type.isUndefined, null,              'false')
tests.run('isUndefined', Type.isUndefined, 0,                 'false')
tests.run('isUndefined', Type.isUndefined, -5,                'false')
tests.run('isUndefined', Type.isUndefined, 5,                 'false')
tests.run('isUndefined', Type.isUndefined, 2.5,               'false')
tests.run('isUndefined', Type.isUndefined, -2.5,              'false')
tests.run('isUndefined', Type.isUndefined, Infinity,          'false')
tests.run('isUndefined', Type.isUndefined, -Infinity,         'false')
tests.run('isUndefined', Type.isUndefined, '',                'false')
tests.run('isUndefined', Type.isUndefined, '    ',            'false')
tests.run('isUndefined', Type.isUndefined, 'hello world',     'false')
tests.run('isUndefined', Type.isUndefined, '  abc',           'false')
tests.run('isUndefined', Type.isUndefined, '0',               'false')
tests.run('isUndefined', Type.isUndefined, '2.5',             'false')
tests.run('isUndefined', Type.isUndefined, {},                'false')
tests.run('isUndefined', Type.isUndefined, { name: 'Bobby' }, 'false')
tests.run('isUndefined', Type.isUndefined, () => {},          'false')
tests.run('isUndefined', Type.isUndefined, async () => {},    'false')
tests.run('isUndefined', Type.isUndefined, [],                'false')
tests.run('isUndefined', Type.isUndefined, [1, 2, 3, 4, 5],   'false')
tests.run('isUndefined', Type.isUndefined, false,             'false')
tests.run('isUndefined', Type.isUndefined, true,              'false')
tests.run('isUndefined', Type.isUndefined, new Map(),         'false')

/* isNone */
tests.run('isNone', Type.isNone, undefined,         'true')
tests.run('isNone', Type.isNone, null,              'true')
tests.run('isNone', Type.isNone, 0,                 'false')
tests.run('isNone', Type.isNone, -5,                'false')
tests.run('isNone', Type.isNone, 5,                 'false')
tests.run('isNone', Type.isNone, 2.5,               'false')
tests.run('isNone', Type.isNone, -2.5,              'false')
tests.run('isNone', Type.isNone, Infinity,          'false')
tests.run('isNone', Type.isNone, -Infinity,         'false')
tests.run('isNone', Type.isNone, '',                'false')
tests.run('isNone', Type.isNone, '    ',            'false')
tests.run('isNone', Type.isNone, 'hello world',     'false')
tests.run('isNone', Type.isNone, '  abc',           'false')
tests.run('isNone', Type.isNone, '0',               'false')
tests.run('isNone', Type.isNone, '2.5',             'false')
tests.run('isNone', Type.isNone, {},                'false')
tests.run('isNone', Type.isNone, { name: 'Bobby' }, 'false')
tests.run('isNone', Type.isNone, () => {},          'false')
tests.run('isNone', Type.isNone, async () => {},    'false')
tests.run('isNone', Type.isNone, [],                'false')
tests.run('isNone', Type.isNone, [1, 2, 3, 4, 5],   'false')
tests.run('isNone', Type.isNone, false,             'false')
tests.run('isNone', Type.isNone, true,              'false')
tests.run('isNone', Type.isNone, new Map(),         'false')

/* isBool */
tests.run('isBool', Type.isBool, undefined,         'false')
tests.run('isBool', Type.isBool, null,              'false')
tests.run('isBool', Type.isBool, 0,                 'false')
tests.run('isBool', Type.isBool, -5,                'false')
tests.run('isBool', Type.isBool, 5,                 'false')
tests.run('isBool', Type.isBool, 2.5,               'false')
tests.run('isBool', Type.isBool, -2.5,              'false')
tests.run('isBool', Type.isBool, Infinity,          'false')
tests.run('isBool', Type.isBool, -Infinity,         'false')
tests.run('isBool', Type.isBool, '',                'false')
tests.run('isBool', Type.isBool, '    ',            'false')
tests.run('isBool', Type.isBool, 'hello world',     'false')
tests.run('isBool', Type.isBool, '  abc',           'false')
tests.run('isBool', Type.isBool, '0',               'false')
tests.run('isBool', Type.isBool, '2.5',             'false')
tests.run('isBool', Type.isBool, {},                'false')
tests.run('isBool', Type.isBool, { name: 'Bobby' }, 'false')
tests.run('isBool', Type.isBool, () => {},          'false')
tests.run('isBool', Type.isBool, async () => {},    'false')
tests.run('isBool', Type.isBool, [],                'false')
tests.run('isBool', Type.isBool, [1, 2, 3, 4, 5],   'false')
tests.run('isBool', Type.isBool, false,             'true')
tests.run('isBool', Type.isBool, true,              'true')
tests.run('isBool', Type.isBool, new Map(),         'false')

/* isObject */
tests.run('isObject', Type.isObject, undefined,         'false')
tests.run('isObject', Type.isObject, null,              'false')
tests.run('isObject', Type.isObject, 0,                 'false')
tests.run('isObject', Type.isObject, -5,                'false')
tests.run('isObject', Type.isObject, 5,                 'false')
tests.run('isObject', Type.isObject, 2.5,               'false')
tests.run('isObject', Type.isObject, -2.5,              'false')
tests.run('isObject', Type.isObject, Infinity,          'false')
tests.run('isObject', Type.isObject, -Infinity,         'false')
tests.run('isObject', Type.isObject, '',                'false')
tests.run('isObject', Type.isObject, '    ',            'false')
tests.run('isObject', Type.isObject, 'hello world',     'false')
tests.run('isObject', Type.isObject, '  abc',           'false')
tests.run('isObject', Type.isObject, '0',               'false')
tests.run('isObject', Type.isObject, '2.5',             'false')
tests.run('isObject', Type.isObject, {},                'true')
tests.run('isObject', Type.isObject, { name: 'Bobby' }, 'true')
tests.run('isObject', Type.isObject, () => {},          'false')
tests.run('isObject', Type.isObject, async () => {},    'false')
tests.run('isObject', Type.isObject, [],                'true')
tests.run('isObject', Type.isObject, [1, 2, 3, 4, 5],   'true')
tests.run('isObject', Type.isObject, false,             'false')
tests.run('isObject', Type.isObject, true,              'false')
tests.run('isObject', Type.isObject, new Map(),         'true')

/* isArray */
tests.run('isArray', Type.isArray, undefined,         'false')
tests.run('isArray', Type.isArray, null,              'false')
tests.run('isArray', Type.isArray, 0,                 'false')
tests.run('isArray', Type.isArray, -5,                'false')
tests.run('isArray', Type.isArray, 5,                 'false')
tests.run('isArray', Type.isArray, 2.5,               'false')
tests.run('isArray', Type.isArray, -2.5,              'false')
tests.run('isArray', Type.isArray, Infinity,          'false')
tests.run('isArray', Type.isArray, -Infinity,         'false')
tests.run('isArray', Type.isArray, '',                'false')
tests.run('isArray', Type.isArray, '    ',            'false')
tests.run('isArray', Type.isArray, 'hello world',     'false')
tests.run('isArray', Type.isArray, '  abc',           'false')
tests.run('isArray', Type.isArray, '0',               'false')
tests.run('isArray', Type.isArray, '2.5',             'false')
tests.run('isArray', Type.isArray, {},                'false')
tests.run('isArray', Type.isArray, { name: 'Bobby' }, 'false')
tests.run('isArray', Type.isArray, () => {},          'false')
tests.run('isArray', Type.isArray, async () => {},    'false')
tests.run('isArray', Type.isArray, [],                'true')
tests.run('isArray', Type.isArray, [1, 2, 3, 4, 5],   'true')
tests.run('isArray', Type.isArray, false,             'false')
tests.run('isArray', Type.isArray, true,              'false')
tests.run('isArray', Type.isArray, new Map(),         'false')

/* isString */
tests.run('isString', Type.isString, undefined,         'false')
tests.run('isString', Type.isString, null,              'false')
tests.run('isString', Type.isString, 0,                 'false')
tests.run('isString', Type.isString, -5,                'false')
tests.run('isString', Type.isString, 5,                 'false')
tests.run('isString', Type.isString, 2.5,               'false')
tests.run('isString', Type.isString, -2.5,              'false')
tests.run('isString', Type.isString, Infinity,          'false')
tests.run('isString', Type.isString, -Infinity,         'false')
tests.run('isString', Type.isString, '',                'true')
tests.run('isString', Type.isString, '    ',            'true')
tests.run('isString', Type.isString, 'hello world',     'true')
tests.run('isString', Type.isString, '  abc',           'true')
tests.run('isString', Type.isString, '0',               'true')
tests.run('isString', Type.isString, '2.5',             'true')
tests.run('isString', Type.isString, {},                'false')
tests.run('isString', Type.isString, { name: 'Bobby' }, 'false')
tests.run('isString', Type.isString, () => {},          'false')
tests.run('isString', Type.isString, async () => {},    'false')
tests.run('isString', Type.isString, [],                'false')
tests.run('isString', Type.isString, [1, 2, 3, 4, 5],   'false')
tests.run('isString', Type.isString, false,             'false')
tests.run('isString', Type.isString, true,              'false')
tests.run('isString', Type.isString, new Map(),         'false')

/* isEmptyString */
tests.run('isEmptyString', Type.isEmptyString, undefined,         'false')
tests.run('isEmptyString', Type.isEmptyString, null,              'false')
tests.run('isEmptyString', Type.isEmptyString, 0,                 'false')
tests.run('isEmptyString', Type.isEmptyString, -5,                'false')
tests.run('isEmptyString', Type.isEmptyString, 5,                 'false')
tests.run('isEmptyString', Type.isEmptyString, 2.5,               'false')
tests.run('isEmptyString', Type.isEmptyString, -2.5,              'false')
tests.run('isEmptyString', Type.isEmptyString, Infinity,          'false')
tests.run('isEmptyString', Type.isEmptyString, -Infinity,         'false')
tests.run('isEmptyString', Type.isEmptyString, '',                'true')
tests.run('isEmptyString', Type.isEmptyString, '    ',            'false')
tests.run('isEmptyString', Type.isEmptyString, 'hello world',     'false')
tests.run('isEmptyString', Type.isEmptyString, '  abc',           'false')
tests.run('isEmptyString', Type.isEmptyString, '0',               'false')
tests.run('isEmptyString', Type.isEmptyString, '2.5',             'false')
tests.run('isEmptyString', Type.isEmptyString, {},                'false')
tests.run('isEmptyString', Type.isEmptyString, { name: 'Bobby' }, 'false')
tests.run('isEmptyString', Type.isEmptyString, () => {},          'false')
tests.run('isEmptyString', Type.isEmptyString, async () => {},    'false')
tests.run('isEmptyString', Type.isEmptyString, [],                'false')
tests.run('isEmptyString', Type.isEmptyString, [1, 2, 3, 4, 5],   'false')
tests.run('isEmptyString', Type.isEmptyString, false,             'false')
tests.run('isEmptyString', Type.isEmptyString, true,              'false')
tests.run('isEmptyString', Type.isEmptyString, new Map(),         'false')

/* isWhiteSpaceString */
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, undefined,         'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, null,              'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, 0,                 'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, -5,                'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, 5,                 'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, 2.5,               'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, -2.5,              'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, Infinity,          'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, -Infinity,         'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, '',                'true')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, '    ',            'true')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, 'hello world',     'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, '  abc',           'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, '0',               'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, '2.5',             'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, {},                'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, { name: 'Bobby' }, 'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, () => {},          'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, async () => {},    'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, [],                'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, [1, 2, 3, 4, 5],   'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, false,             'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, true,              'false')
tests.run('isWhiteSpaceString', Type.isWhiteSpaceString, new Map(),         'false')

/* isNumber */
tests.run('isNumber', Type.isNumber, undefined,         'false')
tests.run('isNumber', Type.isNumber, null,              'false')
tests.run('isNumber', Type.isNumber, 0,                 'true')
tests.run('isNumber', Type.isNumber, -5,                'true')
tests.run('isNumber', Type.isNumber, 5,                 'true')
tests.run('isNumber', Type.isNumber, 2.5,               'true')
tests.run('isNumber', Type.isNumber, -2.5,              'true')
tests.run('isNumber', Type.isNumber, Infinity,          'true')
tests.run('isNumber', Type.isNumber, -Infinity,         'true')
tests.run('isNumber', Type.isNumber, '',                'false')
tests.run('isNumber', Type.isNumber, '    ',            'false')
tests.run('isNumber', Type.isNumber, 'hello world',     'false')
tests.run('isNumber', Type.isNumber, '  abc',           'false')
tests.run('isNumber', Type.isNumber, '0',               'true')
tests.run('isNumber', Type.isNumber, '2.5',             'true')
tests.run('isNumber', Type.isNumber, {},                'false')
tests.run('isNumber', Type.isNumber, { name: 'Bobby' }, 'false')
tests.run('isNumber', Type.isNumber, () => {},          'false')
tests.run('isNumber', Type.isNumber, async () => {},    'false')
tests.run('isNumber', Type.isNumber, [],                'false')
tests.run('isNumber', Type.isNumber, [1, 2, 3, 4, 5],   'false')
tests.run('isNumber', Type.isNumber, false,             'false')
tests.run('isNumber', Type.isNumber, true,              'false')
tests.run('isNumber', Type.isNumber, new Map(),         'false')

/* isFunction */
tests.run('isFunction', Type.isFunction, undefined,         'false')
tests.run('isFunction', Type.isFunction, null,              'false')
tests.run('isFunction', Type.isFunction, 0,                 'false')
tests.run('isFunction', Type.isFunction, -5,                'false')
tests.run('isFunction', Type.isFunction, 5,                 'false')
tests.run('isFunction', Type.isFunction, 2.5,               'false')
tests.run('isFunction', Type.isFunction, -2.5,              'false')
tests.run('isFunction', Type.isFunction, Infinity,          'false')
tests.run('isFunction', Type.isFunction, -Infinity,         'false')
tests.run('isFunction', Type.isFunction, '',                'false')
tests.run('isFunction', Type.isFunction, '    ',            'false')
tests.run('isFunction', Type.isFunction, 'hello world',     'false')
tests.run('isFunction', Type.isFunction, '  abc',           'false')
tests.run('isFunction', Type.isFunction, '0',               'false')
tests.run('isFunction', Type.isFunction, '2.5',             'false')
tests.run('isFunction', Type.isFunction, {},                'false')
tests.run('isFunction', Type.isFunction, { name: 'Bobby' }, 'false')
tests.run('isFunction', Type.isFunction, () => {},          'true')
tests.run('isFunction', Type.isFunction, async () => {},    'true')
tests.run('isFunction', Type.isFunction, [],                'false')
tests.run('isFunction', Type.isFunction, [1, 2, 3, 4, 5],   'false')
tests.run('isFunction', Type.isFunction, false,             'false')
tests.run('isFunction', Type.isFunction, true,              'false')
tests.run('isFunction', Type.isFunction, new Map(),         'false')

/* isIterable */
tests.run('isIterable', Type.isIterable, undefined,         'false')
tests.run('isIterable', Type.isIterable, null,              'false')
tests.run('isIterable', Type.isIterable, 0,                 'false')
tests.run('isIterable', Type.isIterable, -5,                'false')
tests.run('isIterable', Type.isIterable, 5,                 'false')
tests.run('isIterable', Type.isIterable, 2.5,               'false')
tests.run('isIterable', Type.isIterable, -2.5,              'false')
tests.run('isIterable', Type.isIterable, Infinity,          'false')
tests.run('isIterable', Type.isIterable, -Infinity,         'false')
tests.run('isIterable', Type.isIterable, '',                'true')
tests.run('isIterable', Type.isIterable, '    ',            'true')
tests.run('isIterable', Type.isIterable, 'hello world',     'true')
tests.run('isIterable', Type.isIterable, '  abc',           'true')
tests.run('isIterable', Type.isIterable, '0',               'true')
tests.run('isIterable', Type.isIterable, '2.5',             'true')
tests.run('isIterable', Type.isIterable, {},                'false')
tests.run('isIterable', Type.isIterable, { name: 'Bobby' }, 'false')
tests.run('isIterable', Type.isIterable, () => {},          'false')
tests.run('isIterable', Type.isIterable, async () => {},    'false')
tests.run('isIterable', Type.isIterable, [],                'true')
tests.run('isIterable', Type.isIterable, [1, 2, 3, 4, 5],   'true')
tests.run('isIterable', Type.isIterable, false,             'false')
tests.run('isIterable', Type.isIterable, true,              'false')
tests.run('isIterable', Type.isIterable, new Map(),         'true')

/* results */
tests.result()
