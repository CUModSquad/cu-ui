/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference path="../../tsd/tsd.d.ts" />

import * as React from 'react';
import { Part } from './Part';
import { Label } from './Label';
import { WoundColors } from '../classes/WoundColors';

export interface DollState { }
export interface DollProps {
  injuries: any[];
  colors: WoundColors;
}

function getState(damage: number, max: number): number {
  const pct: number = damage / max * 100;
  if (pct >= 66) return 0;
  if (pct >= 33) return 1;
  if (pct > 0) return 2;
  return 3;
}

// TEMP: Until we know the official client Part ID map
function getPart(clientId: number): number {
  switch (clientId) {
    case 0: return 3;
    case 1: return 1;
    case 2: return 2;
    case 3: return 0;
    case 4: return 4;
    case 5: return 5;
  }
  return -1;
}

// Maps part IDs to injury objects.  If an injury for a part is not availale, returns
// an injury that represents full health
class InjuryMap {
  private map : any = {};
  public length: number = 6;
  addInjury(injury:any) {
    this.map[injury.part] = injury;
  }
  getInjury(i : number) : any {
    const injury : any = this.map[i];
    return injury ? injury : { part: i, health: 25, maxHealth: 25, wounds: 0 };
  }
}

export class Doll extends React.Component<DollProps, DollState> {
  render() {
    const injuries = this.props.injuries;
    const parts : any [] = [];
    const labels : any [] = [];
    const map: InjuryMap = new InjuryMap();

    // Build all 6 parts, assumes full health
    // TODO: Should be necessary when client is sending all parts
    for (let i = 0; i < injuries.length; i++) {
      map.addInjury(injuries[i]);
    }

    // Replace damaged body parts
    for (let i = 0; i < map.length; i++) {
      let injury = map.getInjury(i);
      const part = getPart(i);
      const maxHealth = (injury.maxHealth * 3);
      const currentHealth = injury.wounds < 3 ? ((2 - injury.wounds) * injury.maxHealth) + injury.health : 0;
      const state = getState(currentHealth, maxHealth);
      const color = this.props.colors.getColorForWound(injury.health == 0 ? injury.wounds + 1 : injury.wounds);
      parts.push(
        <Part key={'part.'+part}
          part={part}
          health={currentHealth}
          max={maxHealth}
          wounds={injury.wounds}
          state={state}
          color={color}
          />
      );
      labels.push(
        <Label key={'part.' + part}
          part={part}
          value={currentHealth}
          max={maxHealth}
          color={color}
          />
      );
    }

    return (
      <div className="doll">
        {parts}
        {labels}
      </div>
    );
  }
}
