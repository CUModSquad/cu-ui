/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference path="../../tsd/tsd.d.ts" />

import * as React from 'react';

export interface LabelState { }
export interface LabelProps {
  key: string;
  part: number;
  value: number;
  max: number;
  color: string;
}

export class Label extends React.Component<LabelProps, LabelState> {
  render() {
    return (
      <label className={ 'label part-' + this.props.part }>
        <span style={{ color: this.props.color }}>{this.props.value}</span>/{this.props.max}
      </label>
    );
  }
}
