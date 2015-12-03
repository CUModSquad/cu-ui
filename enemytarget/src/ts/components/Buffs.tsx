/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference path="../../tsd/tsd.d.ts" />

import * as React from 'react';
import {icons} from '../resources/Shapes';
import {Svg} from './Svg';

export interface BuffsState { }
export interface BuffsProps {
  type: string;
}

export class Buffs extends React.Component<BuffsProps, BuffsState> {
  render() {
    const buffs: any[] = [];
    for (var i = 3; i >= 0; i--) {
      const icon = icons[i];
      const color : string[] = i === 2 ? [ '#19B24B', 'yellow' ] : [ '#202020', '#202020' ];
      buffs.push(
        <Svg key={ "icon" + i }
          id={ "icon" + i } 
          className="icon"
          stroke={color[1]}
          strokeML="10" 
          color={color[0]}
          box={icon.box}
          rect={icon.rect}
          polygon={icon.polygon}
          path={icon.path}
          circle={icon.circle}
        />
      );
    }
    return (
      <div className={ "buffs " + this.props.type }>
        {buffs}
      </div>
    );
  }
}
