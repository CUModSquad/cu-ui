/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference path="./main.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {events} from 'camelot-unchained';

import PerfHud from './PerfHud';

events.on('init', () => ReactDOM.render( <PerfHud />, document.getElementById('perfhud')));
