// prettier-ignore
/* eslint-disable */
/* auto-generated by NAPI-RS */

const { readFileSync } = require('fs')

let nativeBinding = null
const loadErrors = []

const isMusl = () => {
  let musl = false
  if (process.platform === 'linux') {
    musl = isMuslFromFilesystem()
    if (musl === null) {
      musl = isMuslFromReport()
    }
    if (musl === null) {
      musl = isMuslFromChildProcess()
    }
  }
  return musl
}

const isFileMusl = (f) => f.includes('libc.musl-') || f.includes('ld-musl-')

const isMuslFromFilesystem = () => {
  try {
    return readFileSync('/usr/bin/ldd', 'utf-8').includes('musl')
  } catch {
    return null
  }
}

const isMuslFromReport = () => {
  const report = typeof process.report.getReport === 'function' ? process.report.getReport() : null
  if (!report) {
    return null
  }
  if (report.header && report.header.glibcVersionRuntime) {
    return false
  }
  if (Array.isArray(report.sharedObjects)) {
    if (report.sharedObjects.some(isFileMusl)) {
      return true
    }
  }
  return false
}

const isMuslFromChildProcess = () => {
  try {
    return require('child_process').execSync('ldd --version', { encoding: 'utf8' }).includes('musl')
  } catch (e) {
    // If we reach this case, we don't know if the system is musl or not, so is better to just fallback to false
    return false
  }
}

function requireNative() {
  if (process.platform === 'android') {
    if (process.arch === 'arm64') {
      try {
        return require('./example.android-arm64.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-android-arm64')
      } catch (e) {
        loadErrors.push(e)
      }

    } else if (process.arch === 'arm') {
      try {
        return require('./example.android-arm-eabi.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-android-arm-eabi')
      } catch (e) {
        loadErrors.push(e)
      }

    } else {
      loadErrors.push(new Error(`Unsupported architecture on Android ${process.arch}`))
    }
  } else if (process.platform === 'win32') {
    if (process.arch === 'x64') {
      try {
        return require('./example.win32-x64-msvc.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-win32-x64-msvc')
      } catch (e) {
        loadErrors.push(e)
      }

    } else if (process.arch === 'ia32') {
      try {
        return require('./example.win32-ia32-msvc.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-win32-ia32-msvc')
      } catch (e) {
        loadErrors.push(e)
      }

    } else if (process.arch === 'arm64') {
      try {
        return require('./example.win32-arm64-msvc.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-win32-arm64-msvc')
      } catch (e) {
        loadErrors.push(e)
      }

    } else {
      loadErrors.push(new Error(`Unsupported architecture on Windows: ${process.arch}`))
    }
  } else if (process.platform === 'darwin') {
    try {
        return require('./example.darwin-universal.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-darwin-universal')
      } catch (e) {
        loadErrors.push(e)
      }

    if (process.arch === 'x64') {
      try {
        return require('./example.darwin-x64.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-darwin-x64')
      } catch (e) {
        loadErrors.push(e)
      }

    } else if (process.arch === 'arm64') {
      try {
        return require('./example.darwin-arm64.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-darwin-arm64')
      } catch (e) {
        loadErrors.push(e)
      }

    } else {
      loadErrors.push(new Error(`Unsupported architecture on macOS: ${process.arch}`))
    }
  } else if (process.platform === 'freebsd') {
    if (process.arch === 'x64') {
      try {
        return require('./example.freebsd-x64.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-freebsd-x64')
      } catch (e) {
        loadErrors.push(e)
      }

    } else if (process.arch === 'arm64') {
      try {
        return require('./example.freebsd-arm64.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-freebsd-arm64')
      } catch (e) {
        loadErrors.push(e)
      }

    } else {
      loadErrors.push(new Error(`Unsupported architecture on FreeBSD: ${process.arch}`))
    }
  } else if (process.platform === 'linux') {
    if (process.arch === 'x64') {
      if (isMusl()) {
        try {
        return require('./example.linux-x64-musl.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-linux-x64-musl')
      } catch (e) {
        loadErrors.push(e)
      }

      } else {
        try {
        return require('./example.linux-x64-gnu.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-linux-x64-gnu')
      } catch (e) {
        loadErrors.push(e)
      }

      }
    } else if (process.arch === 'arm64') {
      if (isMusl()) {
        try {
        return require('./example.linux-arm64-musl.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-linux-arm64-musl')
      } catch (e) {
        loadErrors.push(e)
      }

      } else {
        try {
        return require('./example.linux-arm64-gnu.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-linux-arm64-gnu')
      } catch (e) {
        loadErrors.push(e)
      }

      }
    } else if (process.arch === 'arm') {
      try {
        return require('./example.linux-arm-gnueabihf.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-linux-arm-gnueabihf')
      } catch (e) {
        loadErrors.push(e)
      }

    } else if (process.arch === 'riscv64') {
      if (isMusl()) {
        try {
        return require('./example.linux-riscv64-musl.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-linux-riscv64-musl')
      } catch (e) {
        loadErrors.push(e)
      }

      } else {
        try {
        return require('./example.linux-riscv64-gnu.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-linux-riscv64-gnu')
      } catch (e) {
        loadErrors.push(e)
      }

      }
    } else if (process.arch === 's390x') {
      try {
        return require('./example.linux-s390x-gnu.node')
      } catch (e) {
        loadErrors.push(e)
      }
      try {
        return require('@examples/napi-linux-s390x-gnu')
      } catch (e) {
        loadErrors.push(e)
      }

    } else {
      loadErrors.push(new Error(`Unsupported architecture on Linux: ${process.arch}`))
    }
  } else {
    loadErrors.push(new Error(`Unsupported OS: ${process.platform}, architecture: ${process.arch}`))
  }
}

nativeBinding = requireNative()

if (!nativeBinding || process.env.NAPI_RS_FORCE_WASI) {
  try {
    nativeBinding = require('./example.wasi.cjs')
  } catch (err) {
    if (process.env.NAPI_RS_FORCE_WASI) {
      console.error(err)
    }
  }
  if (!nativeBinding) {
    try {
      nativeBinding = require('@examples/napi-wasm32-wasi')
    } catch (err) {
      if (process.env.NAPI_RS_FORCE_WASI) {
        console.error(err)
      }
    }
  }
}

if (!nativeBinding) {
  if (loadErrors.length > 0) {
    // TODO Link to documentation with potential fixes
    //  - The package owner could build/publish bindings for this arch
    //  - The user may need to bundle the correct files
    //  - The user may need to re-install node_modules to get new packages
    throw new Error('Failed to load native binding', { cause: loadErrors })
  }
  throw new Error(`Failed to load native binding`)
}

module.exports.Animal = nativeBinding.Animal
module.exports.AnimalWithDefaultConstructor = nativeBinding.AnimalWithDefaultConstructor
module.exports.AnotherClassForEither = nativeBinding.AnotherClassForEither
module.exports.AnotherCssStyleSheet = nativeBinding.AnotherCssStyleSheet
module.exports.AnotherCSSStyleSheet = nativeBinding.AnotherCSSStyleSheet
module.exports.Asset = nativeBinding.Asset
module.exports.JsAsset = nativeBinding.JsAsset
module.exports.Assets = nativeBinding.Assets
module.exports.JsAssets = nativeBinding.JsAssets
module.exports.Bird = nativeBinding.Bird
module.exports.Blake2BHasher = nativeBinding.Blake2BHasher
module.exports.Blake2bHasher = nativeBinding.Blake2bHasher
module.exports.Blake2BKey = nativeBinding.Blake2BKey
module.exports.Blake2bKey = nativeBinding.Blake2bKey
module.exports.CatchOnConstructor = nativeBinding.CatchOnConstructor
module.exports.CatchOnConstructor2 = nativeBinding.CatchOnConstructor2
module.exports.ClassWithFactory = nativeBinding.ClassWithFactory
module.exports.Context = nativeBinding.Context
module.exports.CssRuleList = nativeBinding.CssRuleList
module.exports.CSSRuleList = nativeBinding.CSSRuleList
module.exports.CssStyleSheet = nativeBinding.CssStyleSheet
module.exports.CSSStyleSheet = nativeBinding.CSSStyleSheet
module.exports.CustomFinalize = nativeBinding.CustomFinalize
module.exports.DefaultUseNullableClass = nativeBinding.DefaultUseNullableClass
module.exports.Dog = nativeBinding.Dog
module.exports.Fib = nativeBinding.Fib
module.exports.Fib2 = nativeBinding.Fib2
module.exports.Fib3 = nativeBinding.Fib3
module.exports.GetterSetterWithClosures = nativeBinding.GetterSetterWithClosures
module.exports.JsClassForEither = nativeBinding.JsClassForEither
module.exports.JsRemote = nativeBinding.JsRemote
module.exports.JsRepo = nativeBinding.JsRepo
module.exports.NinjaTurtle = nativeBinding.NinjaTurtle
module.exports.NotUseNullableClass = nativeBinding.NotUseNullableClass
module.exports.NotWritableClass = nativeBinding.NotWritableClass
module.exports.Optional = nativeBinding.Optional
module.exports.Selector = nativeBinding.Selector
module.exports.UseNullableClass = nativeBinding.UseNullableClass
module.exports.Width = nativeBinding.Width
module.exports.acceptArraybuffer = nativeBinding.acceptArraybuffer
module.exports.acceptSlice = nativeBinding.acceptSlice
module.exports.acceptThreadsafeFunction = nativeBinding.acceptThreadsafeFunction
module.exports.acceptThreadsafeFunctionFatal = nativeBinding.acceptThreadsafeFunctionFatal
module.exports.acceptThreadsafeFunctionTupleArgs = nativeBinding.acceptThreadsafeFunctionTupleArgs
module.exports.acceptUint8ClampedSlice = nativeBinding.acceptUint8ClampedSlice
module.exports.acceptUint8ClampedSliceAndBufferSlice = nativeBinding.acceptUint8ClampedSliceAndBufferSlice
module.exports.add = nativeBinding.add
module.exports.ALIAS = nativeBinding.ALIAS
module.exports.AliasedEnum = nativeBinding.AliasedEnum
module.exports.appendBuffer = nativeBinding.appendBuffer
module.exports.apply0 = nativeBinding.apply0
module.exports.apply1 = nativeBinding.apply1
module.exports.arrayBufferPassThrough = nativeBinding.arrayBufferPassThrough
module.exports.asyncBufferToArray = nativeBinding.asyncBufferToArray
module.exports.asyncMultiTwo = nativeBinding.asyncMultiTwo
module.exports.asyncPlus100 = nativeBinding.asyncPlus100
module.exports.asyncReduceBuffer = nativeBinding.asyncReduceBuffer
module.exports.asyncTaskOptionalReturn = nativeBinding.asyncTaskOptionalReturn
module.exports.asyncTaskVoidReturn = nativeBinding.asyncTaskVoidReturn
module.exports.bigintAdd = nativeBinding.bigintAdd
module.exports.bigintFromI128 = nativeBinding.bigintFromI128
module.exports.bigintFromI64 = nativeBinding.bigintFromI64
module.exports.bigintGetU64AsString = nativeBinding.bigintGetU64AsString
module.exports.bufferPassThrough = nativeBinding.bufferPassThrough
module.exports.call0 = nativeBinding.call0
module.exports.call1 = nativeBinding.call1
module.exports.call2 = nativeBinding.call2
module.exports.callbackReturnPromise = nativeBinding.callbackReturnPromise
module.exports.callbackReturnPromiseAndSpawn = nativeBinding.callbackReturnPromiseAndSpawn
module.exports.callFunction = nativeBinding.callFunction
module.exports.callFunctionWithArg = nativeBinding.callFunctionWithArg
module.exports.callFunctionWithArgAndCtx = nativeBinding.callFunctionWithArgAndCtx
module.exports.callLongThreadsafeFunction = nativeBinding.callLongThreadsafeFunction
module.exports.callThreadsafeFunction = nativeBinding.callThreadsafeFunction
module.exports.captureErrorInCallback = nativeBinding.captureErrorInCallback
module.exports.chronoDateAdd1Minute = nativeBinding.chronoDateAdd1Minute
module.exports.chronoDateToMillis = nativeBinding.chronoDateToMillis
module.exports.chronoNativeDateTime = nativeBinding.chronoNativeDateTime
module.exports.chronoNativeDateTimeReturn = nativeBinding.chronoNativeDateTimeReturn
module.exports.concatLatin1 = nativeBinding.concatLatin1
module.exports.concatStr = nativeBinding.concatStr
module.exports.concatUtf16 = nativeBinding.concatUtf16
module.exports.contains = nativeBinding.contains
module.exports.convertU32Array = nativeBinding.convertU32Array
module.exports.createBigInt = nativeBinding.createBigInt
module.exports.createBigIntI64 = nativeBinding.createBigIntI64
module.exports.createExternal = nativeBinding.createExternal
module.exports.createExternalString = nativeBinding.createExternalString
module.exports.createExternalTypedArray = nativeBinding.createExternalTypedArray
module.exports.createObj = nativeBinding.createObj
module.exports.createObjectWithClassField = nativeBinding.createObjectWithClassField
module.exports.createObjWithProperty = nativeBinding.createObjWithProperty
module.exports.createReferenceOnFunction = nativeBinding.createReferenceOnFunction
module.exports.createSymbol = nativeBinding.createSymbol
module.exports.createSymbolFor = nativeBinding.createSymbolFor
module.exports.CustomNumEnum = nativeBinding.CustomNumEnum
module.exports.customStatusCode = nativeBinding.customStatusCode
module.exports.dateToNumber = nativeBinding.dateToNumber
module.exports.DEFAULT_COST = nativeBinding.DEFAULT_COST
module.exports.derefUint8Array = nativeBinding.derefUint8Array
module.exports.either3 = nativeBinding.either3
module.exports.either4 = nativeBinding.either4
module.exports.eitherBoolOrFunction = nativeBinding.eitherBoolOrFunction
module.exports.eitherBoolOrTuple = nativeBinding.eitherBoolOrTuple
module.exports.eitherFromObjects = nativeBinding.eitherFromObjects
module.exports.eitherFromOption = nativeBinding.eitherFromOption
module.exports.eitherStringOrNumber = nativeBinding.eitherStringOrNumber
module.exports.Empty = nativeBinding.Empty
module.exports.enumToI32 = nativeBinding.enumToI32
module.exports.f32ArrayToArray = nativeBinding.f32ArrayToArray
module.exports.f64ArrayToArray = nativeBinding.f64ArrayToArray
module.exports.fibonacci = nativeBinding.fibonacci
module.exports.fnReceivedAliased = nativeBinding.fnReceivedAliased
module.exports.getBtreeMapping = nativeBinding.getBtreeMapping
module.exports.getBuffer = nativeBinding.getBuffer
module.exports.getCwd = nativeBinding.getCwd
module.exports.getEmptyBuffer = nativeBinding.getEmptyBuffer
module.exports.getExternal = nativeBinding.getExternal
module.exports.getGlobal = nativeBinding.getGlobal
module.exports.getIndexMapping = nativeBinding.getIndexMapping
module.exports.getMapping = nativeBinding.getMapping
module.exports.getModuleFileName = nativeBinding.getModuleFileName
module.exports.getNestedNumArr = nativeBinding.getNestedNumArr
module.exports.getNull = nativeBinding.getNull
module.exports.getNumArr = nativeBinding.getNumArr
module.exports.getNums = nativeBinding.getNums
module.exports.getPackageJsonName = nativeBinding.getPackageJsonName
module.exports.getStrFromObject = nativeBinding.getStrFromObject
module.exports.getterFromObj = nativeBinding.getterFromObj
module.exports.getUndefined = nativeBinding.getUndefined
module.exports.getWords = nativeBinding.getWords
module.exports.i16ArrayToArray = nativeBinding.i16ArrayToArray
module.exports.i32ArrayToArray = nativeBinding.i32ArrayToArray
module.exports.i64ArrayToArray = nativeBinding.i64ArrayToArray
module.exports.i8ArrayToArray = nativeBinding.i8ArrayToArray
module.exports.indexmapPassthrough = nativeBinding.indexmapPassthrough
module.exports.Kind = nativeBinding.Kind
module.exports.listObjKeys = nativeBinding.listObjKeys
module.exports.mapOption = nativeBinding.mapOption
module.exports.mutateExternal = nativeBinding.mutateExternal
module.exports.mutateTypedArray = nativeBinding.mutateTypedArray
module.exports.objectGetNamedPropertyShouldPerformTypecheck = nativeBinding.objectGetNamedPropertyShouldPerformTypecheck
module.exports.optionEnd = nativeBinding.optionEnd
module.exports.optionOnly = nativeBinding.optionOnly
module.exports.optionStart = nativeBinding.optionStart
module.exports.optionStartEnd = nativeBinding.optionStartEnd
module.exports.overrideIndividualArgOnFunction = nativeBinding.overrideIndividualArgOnFunction
module.exports.overrideIndividualArgOnFunctionWithCbArg = nativeBinding.overrideIndividualArgOnFunctionWithCbArg
module.exports.panic = nativeBinding.panic
module.exports.panicInAsync = nativeBinding.panicInAsync
module.exports.plusOne = nativeBinding.plusOne
module.exports.promiseInEither = nativeBinding.promiseInEither
module.exports.readFile = nativeBinding.readFile
module.exports.readFileAsync = nativeBinding.readFileAsync
module.exports.readPackageJson = nativeBinding.readPackageJson
module.exports.receiveAllOptionalObject = nativeBinding.receiveAllOptionalObject
module.exports.receiveClassOrNumber = nativeBinding.receiveClassOrNumber
module.exports.receiveDifferentClass = nativeBinding.receiveDifferentClass
module.exports.receiveMutClassOrNumber = nativeBinding.receiveMutClassOrNumber
module.exports.receiveObjectOnlyFromJs = nativeBinding.receiveObjectOnlyFromJs
module.exports.receiveObjectWithClassField = nativeBinding.receiveObjectWithClassField
module.exports.receiveStrictObject = nativeBinding.receiveStrictObject
module.exports.receiveString = nativeBinding.receiveString
module.exports.referenceAsCallback = nativeBinding.referenceAsCallback
module.exports.returnEither = nativeBinding.returnEither
module.exports.returnEitherClass = nativeBinding.returnEitherClass
module.exports.returnFromSharedCrate = nativeBinding.returnFromSharedCrate
module.exports.returnJsFunction = nativeBinding.returnJsFunction
module.exports.returnNull = nativeBinding.returnNull
module.exports.returnObjectOnlyToJs = nativeBinding.returnObjectOnlyToJs
module.exports.returnUndefined = nativeBinding.returnUndefined
module.exports.returnUndefinedIfInvalid = nativeBinding.returnUndefinedIfInvalid
module.exports.returnUndefinedIfInvalidPromise = nativeBinding.returnUndefinedIfInvalidPromise
module.exports.roundtripStr = nativeBinding.roundtripStr
module.exports.runScript = nativeBinding.runScript
module.exports.setSymbolInObj = nativeBinding.setSymbolInObj
module.exports.Status = nativeBinding.Status
module.exports.StringEnum = nativeBinding.StringEnum
module.exports.sumBtreeMapping = nativeBinding.sumBtreeMapping
module.exports.sumIndexMapping = nativeBinding.sumIndexMapping
module.exports.sumMapping = nativeBinding.sumMapping
module.exports.sumNums = nativeBinding.sumNums
module.exports.testSerdeBigNumberPrecision = nativeBinding.testSerdeBigNumberPrecision
module.exports.testSerdeBufferBytes = nativeBinding.testSerdeBufferBytes
module.exports.testSerdeRoundtrip = nativeBinding.testSerdeRoundtrip
module.exports.threadsafeFunctionClosureCapture = nativeBinding.threadsafeFunctionClosureCapture
module.exports.threadsafeFunctionFatalMode = nativeBinding.threadsafeFunctionFatalMode
module.exports.threadsafeFunctionFatalModeError = nativeBinding.threadsafeFunctionFatalModeError
module.exports.threadsafeFunctionThrowError = nativeBinding.threadsafeFunctionThrowError
module.exports.throwAsyncError = nativeBinding.throwAsyncError
module.exports.throwError = nativeBinding.throwError
module.exports.throwSyntaxError = nativeBinding.throwSyntaxError
module.exports.toJsObj = nativeBinding.toJsObj
module.exports.tsfnAsyncCall = nativeBinding.tsfnAsyncCall
module.exports.tsfnCallWithCallback = nativeBinding.tsfnCallWithCallback
module.exports.tsfnReturnPromise = nativeBinding.tsfnReturnPromise
module.exports.tsfnReturnPromiseTimeout = nativeBinding.tsfnReturnPromiseTimeout
module.exports.tsfnThrowFromJs = nativeBinding.tsfnThrowFromJs
module.exports.tsRename = nativeBinding.tsRename
module.exports.u16ArrayToArray = nativeBinding.u16ArrayToArray
module.exports.u32ArrayToArray = nativeBinding.u32ArrayToArray
module.exports.u64ArrayToArray = nativeBinding.u64ArrayToArray
module.exports.u8ArrayToArray = nativeBinding.u8ArrayToArray
module.exports.validateArray = nativeBinding.validateArray
module.exports.validateBigint = nativeBinding.validateBigint
module.exports.validateBoolean = nativeBinding.validateBoolean
module.exports.validateBuffer = nativeBinding.validateBuffer
module.exports.validateBufferSlice = nativeBinding.validateBufferSlice
module.exports.validateDate = nativeBinding.validateDate
module.exports.validateDateTime = nativeBinding.validateDateTime
module.exports.validateExternal = nativeBinding.validateExternal
module.exports.validateFunction = nativeBinding.validateFunction
module.exports.validateHashMap = nativeBinding.validateHashMap
module.exports.validateNull = nativeBinding.validateNull
module.exports.validateNumber = nativeBinding.validateNumber
module.exports.validateOptional = nativeBinding.validateOptional
module.exports.validatePromise = nativeBinding.validatePromise
module.exports.validateString = nativeBinding.validateString
module.exports.validateSymbol = nativeBinding.validateSymbol
module.exports.validateTypedArray = nativeBinding.validateTypedArray
module.exports.validateTypedArraySlice = nativeBinding.validateTypedArraySlice
module.exports.validateUint8ClampedSlice = nativeBinding.validateUint8ClampedSlice
module.exports.validateUndefined = nativeBinding.validateUndefined
module.exports.withAbortController = nativeBinding.withAbortController
module.exports.withoutAbortController = nativeBinding.withoutAbortController
module.exports.xxh64Alias = nativeBinding.xxh64Alias
module.exports.xxh2 = nativeBinding.xxh2
module.exports.xxh3 = nativeBinding.xxh3
