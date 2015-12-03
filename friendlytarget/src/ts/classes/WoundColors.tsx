/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference path="../../tsd/tsd.d.ts" />

const defaultColors: string[] = ['#19b24b', '#feeb00', '#fe1e14', '#200000'];

export class WoundColors {
  private key: string = "cse.wound.colors";
  private colors: string[];
  constructor() {
    this.load();
  }
  load() : void {
    const value = localStorage.getItem(this.key);
    if (value) {
      this.colors = value.split(",");
    } else {
      this.colors = defaultColors;
    }
  }
  save() : void {
    localStorage.setItem(this.key, this.colors.join(','));
  }
  public getColorForWound(wound:number) : string {
    return this.colors[wound];
  }
}
