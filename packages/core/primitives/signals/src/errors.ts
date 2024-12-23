/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {SignalNode} from './signal';

type ThrowInvalidWriteToSignalErrorFn = (node: SignalNode<unknown>) => never;

function defaultThrowError(): never {
  throw new Error();
}

let throwInvalidWriteToSignalErrorFn: ThrowInvalidWriteToSignalErrorFn = defaultThrowError;

export function throwInvalidWriteToSignalError(node: SignalNode<unknown>) {
  throwInvalidWriteToSignalErrorFn(node);
}

export function setThrowInvalidWriteToSignalError(fn: ThrowInvalidWriteToSignalErrorFn): void {
  throwInvalidWriteToSignalErrorFn = fn;
}
