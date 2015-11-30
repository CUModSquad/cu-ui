/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference path="../tsd/tsd.d.ts" />

import * as React from 'react';
import * as cuAPI from 'cu-core';
import { Player } from 'cu-core';
import events from 'cu-events';
import { FriendlyTargetStore } from 'cu-stores';
import { Wounds } from 'cu-components';

const character : any = FriendlyTargetStore.create();

class WoundsUIState {
  public character: any;
  constructor() {
    this.character = null;
  }
}
class WoundsUIProps {}

class WoundsUI extends React.Component<WoundsUIProps, WoundsUIState> {
  constructor(props: WoundsUIProps) {
    super(props);
  }
  componentWillMount() {
    this.oncharacter(character.store.info);
  }
  oncharacter(character: Player) {
    this.setState({ character: character });
  }
  render() {
    const character = this.state.character;
    return (
      <div>
        <Wounds injuries={character.injuries}
          health={character.health} healthMax={character.maxHealth}
          stamina={character.stamina} staminaMax={character.maxStamina}
          //panic={character.panic} panicMax={character.maxPanic}
          //temp={character.temp} tempMax={character.maxTemp}
          />
      </div>
    );
  }
}

events.on('init', () => {
  character.actions.start();
  React.render(<WoundsUI/>, document.getElementById("cse-ui-wounds"));
});
