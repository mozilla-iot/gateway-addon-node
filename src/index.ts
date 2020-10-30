/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

import {Action} from './action';
import {Adapter} from './adapter';
import {AddonManagerProxy} from './addon-manager-proxy';
import {APIHandler, APIRequest, APIResponse} from './api-handler';
import * as Constants from './constants';
import {Database} from './database';
import {Deferred} from './deferred';
import {Device} from './device';
import {Event} from './event';
import {IpcSocket} from './ipc';
import {Notifier} from './notifier';
import {Outlet} from './outlet';
import {PluginClient} from './plugin-client';
import {Property} from './property';
import * as Utils from './utils';

export {
  Action,
  Adapter,
  AddonManagerProxy,
  APIHandler,
  APIRequest,
  APIResponse,
  Constants,
  Database,
  Deferred,
  Device,
  Event,
  IpcSocket,
  Notifier,
  Outlet,
  PluginClient,
  Property,
  Utils,
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const getVersion = () => require('./package.json').version;