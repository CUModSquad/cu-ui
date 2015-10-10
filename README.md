cu-ui
=====

> Camelot Unchained UI 2.0

This repository contains all of the UI widgets in [Camelot Unchained](http://camelotunchained.com/v2/).
This is the entire front-end UI for the game, not a partial stripped-down version.
This is what we're going to ship and we will take pull requests from the community seriously.

---

Installation
------------

Clone this repository:

```sh
git clone https://github.com/csegames/cu-ui.git
```

```
# install development packages
npm install

# install the UI
gulp install

# publish the UI
gulp publish
```

---

Development
-----------

To develop the UI you have the following commands (provided by cu-build-tools):

#### `gulp install`

This will ensure all the modules/libraries have their dependencies installed properly.
It also generates `.csproj` files for integration with VS

#### `gulp publish`

This will build all the modules/libraries into the `publish` directory ready for testing in the client.

#### `gulp server`

This will start a server to preview all the modules/libraries. It will also inject scripts declared in the build config.

#### `gulp %MODULE%`

This will publish a specific module, e.g. `gulp character` will publish the `character` module.

#### `gulp %MODULE%::%TASK`

This will allow you to run a gulp task on a specific module, e.g. `gulp character::watch` will start watching the
character module for changes.

Publishing to User UI Folder
----------------------------

To publish to the Client User UI folder you will need to add the following to your publish command:

```
--user-ui
```

Or if you want to target a specific channel you can add the channel number to the command.

```
--user-ui 10
```

Overriding `cu-build.config.js`
-----------------------------

You can override configuration in `cu-build.config.js` by creating a file called
`user-cu-build.config.js` and exporting override configuration.

Example:

```js
// user-cu-build.config.js

module.exports = {
  publish: {
    dest: __dirname + '/my-custom-publish-directory',
  }
};

```

---

Chromium Embedded Framework Version
-----------------------------------

CEF Version: 3  - revision 1749

Chrome Version: 35.0 - build 1916 - patch 138

---

UI Discussions
--------------

For discussion with your fellow intrepid modders and hackers, hang out in our backer forums at:

> https://forums.camelotunchained.com/forum/63-ui-modding-hacking/

---

Licensing
---------

The code is licensed under the Mozilla Public License, version 2.0:

> https://www.mozilla.org/MPL/2.0/
