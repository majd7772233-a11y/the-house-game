# AGENT.md

## 1. Mission and Working Rules

You are working in **The House**, a legacy browser-based adventure game. This file is the project-specific operating guide. Read it before making changes, then move directly into the requested task.

### Required workflow

1. Inspect the current branch, working-tree changes, and the relevant files before editing. Preserve all pre-existing user changes.
2. Read the applicable sections of `README.md` and trace the real runtime path through `index.html`, the JavaScript source, the room HTML, and the associated Less/CSS.
3. Make the requested change in the existing architecture. Do not stop at a high-level explanation when the task is sufficiently specified; implement the change and verify its user-facing behavior.
4. Follow interactions end to end. A feature is not complete merely because a function exists or the JavaScript parses. Check the visible interaction, player movement, room transitions, inventory, saved progress, animation, sound, and relevant edge cases.
5. Keep changes focused. Do not replace the game architecture, rewrite unrelated rooms, modernize every dependency, or reorganize assets as part of a narrow fix.
6. Never claim that a build, test, or browser check passed unless it was actually run. Report checks that could not be performed.

### Project-specific non-negotiable rules

- Treat this as a **static HTML/CSS/JavaScript project**, not a Node, React, Vue, Angular, or server application.
- Preserve the existing global-script architecture, script load order, jQuery plugins, DOM contracts, and legacy browser feature checks unless the task explicitly requires a carefully planned change.
- The unminified files in `js/` are the maintainable application sources. The page loads generated/minified application files from `js/min/`. Keep the deployed runtime files synchronized with their source files.
- The main stylesheet source is `css/styles.less` and its imported Less files. The deployed page loads `css/styles.css`. Keep the compiled stylesheet synchronized with the Less sources.
- Room HTML element IDs, classes, and data attributes are used directly by JavaScript and CSS. Treat them as API contracts; do not rename them casually.
- Preserve local assets and relative paths. Do not introduce a remote service, API, package manager, framework, or external asset dependency without a clear task requirement.
- Preserve the project's existing license and third-party credits. See `LICENSE.md` and the Credits section in `README.md`.

## 2. What This Project Is

The House is a short, atmospheric, exploration/adventure game rendered in the browser. The player explores rooms, clicks interactive objects, walks across a tile grid, collects and uses items, triggers dialogue and scripted scenes, solves environmental puzzles, and resumes progress from browser storage.

The game is implemented as a static client-side experience:

- **HTML** defines the main page and room/view fragments.
- **CSS and Less** position and animate the rooms, objects, character, interface, and visual effects.
- **JavaScript** manages the room grid, pathfinding, player movement, interactions, inventory, scenes, non-player characters, audio, and saved progress.
- **Local image, font, sound, and SWF assets** provide the game's visual and audio content.

There is no application server or backend in the checked-in project structure. Room fragments and assets are loaded using relative URLs, so the project should be served over HTTP(S), not tested by opening `index.html` through a `file://` URL.

## 3. Runtime Entry Point and Startup Sequence

### Entry point: `index.html`

The root `index.html` is the actual application entry point. It:

- Loads `css/styles.css`.
- Loads Modernizr and SoundManager 2.
- Uses `Modernizr.load()` to test for border-radius, opacity, and CSS transforms support.
- Loads the required libraries and application bundles in a specific order.
- Defines the outer page containers, including `#the_game`, `#items`, `#settings`, `#switch_sound`, and `#lightbox`.

Do not casually reorder the scripts. The application uses shared globals and jQuery plugins, so later files depend on earlier libraries and modules.

The current `yep` load sequence includes jQuery 1.7, color animation, CSS-image preloading, jStorage, Spritely, jQuery UI draggable, Transit, Idle Timer, and then the application bundles for dialogue, tooltips, text clouds, data, settings, audio, items, views, rooms, scenes, NPCs, and the game controller.

### Startup and resume flow

1. The application scripts initialize and wait for `soundManager.onready()`.
2. The game controller loads `intro.html` into `#the_game`.
3. The player activates the intro screen through `#logo`, `#head_hole`, or `#enter`.
4. On a new save, `scene.intro()` starts the opening sequence.
5. On an existing save, the value of `is_in` is used to select the appropriate room or scene.
6. The selected room is generated, the inventory holder is initialized, and the settings UI is initialized.

The resume dispatch is near the end of `js/game.js`. Any change to a room identifier or the way a room is entered must be checked against this dispatch logic.

### Verified compatibility-path discrepancy

In the inspected `index.html`, the Modernizr `nope` list refers to `js/min/old_browser.js`. The checked-in tree contains `js/min/old_browser-min.js` and the source `js/old_browser.js`, but does not contain `js/min/old_browser.js`. Treat this as an existing path discrepancy to verify when working on compatibility or startup loading; do not silently assume the fallback is working or change it as an unrelated side effect.

## 4. Repository Map

### Root-level files

| Path | Purpose |
| --- | --- |
| `index.html` | Main document, script loading, global game UI, and startup containers. |
| `README.md` | Original project overview, architecture notes, and credits. |
| `README.html` | HTML copy of project documentation. |
| `LICENSE.md` | MIT license; preserve the copyright and license notice. |
| `CNAME` | Custom-domain configuration for the published static site. |
| `config.codekit`, `config.codekit3` | CodeKit project configuration files. |
| `.gitignore` | Currently ignores `.DS_Store`. |

### Room and view HTML fragments

Most root-level HTML files are **fragments**, not standalone pages. The room engine injects them into `#the_game` with jQuery `.load()`. The value passed as `inject` must match the corresponding filename without the `.html` extension.

The 18 room identifiers currently passed to `room.generate()` are:

- `room`
- `aquarium`
- `picture`
- `picture_snow`
- `corridor`
- `hidden_corridor`
- `kitchen_true`
- `kitchen`
- `toilet`
- `bathroom`
- `big_room`
- `boiler_room`
- `fridge`
- `train`
- `last_corridor`
- `void`
- `void_bathroom`
- `exit`

Each has a corresponding root-level HTML fragment. The other HTML files have supporting roles:

| File | Role |
| --- | --- |
| `intro.html` | Intro/title screen loaded into the game container. |
| `cabin.html` | Special cabin scene loaded by `scene.cabin()`. |
| `keypad.html` | Keypad puzzle fragment loaded into the lightbox. |
| `room_view.html` | Reusable outside/window-view container used by `js/view.js`. |
| `outside_view.html` | Outside scene loaded by scene logic. |
| `bathroom_reflection.html` | Bathroom reflection fragment. |
| `old_browser.html` | Unsupported-browser fallback content. |
| `picker.html` | Supporting page for the grid/hit-area picker utility. |

Other room files must be classified by following their actual callers; do not assume every root-level HTML file is a room.

### JavaScript source: `js/`

| File | Responsibility |
| --- | --- |
| `game.js` | Main game controller. Defines room-specific setup and interactions, room transitions, puzzles, and the startup/resume dispatch. |
| `room.js` | Room engine: fragment injection, grid creation, player placement, collision setup, viewport dragging/centering, player movement, and A* pathfinding. |
| `scenes.js` | Narrative sequences, cutscenes, transition effects, and click-blocking overlays. |
| `data.js` | Initializes and reads the persistent game data stored through jStorage. |
| `items.js` | Inventory behavior: taking, using, displaying, and restoring items. |
| `npcs.js` | NPC behavior, including the fish and furnace-related character logic. The global object is named `npc`. |
| `audio.js` | SoundManager setup, sound registration, format selection, and mute handling. |
| `settings.js` | Settings menu, reset confirmation, and fullscreen control. |
| `view.js` | Window/outside views and floating view objects. |
| `dialogue_box.js` | Dialogue and option boxes. |
| `tooltip.js` | jQuery tooltip plugin used by interactive objects. |
| `text_cloud.js` | jQuery text-cloud/speech-bubble plugin. |
| `utility.js` | Grid picker utility for generating tile IDs/selectors. |
| `old_browser.js` | Unsupported-browser fallback behavior. |

The game controller's current room methods are `room`, `aquarium`, `picture`, `picture_snow`, `corridor`, `hidden_corridor`, `kitchen_true`, `kitchen`, `toilet`, `bathroom_setup`, `bathroom`, `big_room`, `boiler_room`, `fridge`, `train`, `last_corridor`, `void`, `void_bathroom`, and `exit`. The `cabin` sequence is implemented in `scene.cabin()`, rather than as a normal `game.*` room method.

### Generated JavaScript and vendor libraries

- `js/min/` contains the minified application bundles loaded by `index.html`.
- `js/libs/` and `js/libs/min/` contain third-party libraries and their distribution/minified copies.
- `js/npcs-min.js` is an additional legacy copy; the main page loads `js/min/npcs-min.js`.
- `js/room.bak.js` and `js/min/room.bak-min.js` are backup/legacy files, not the active room engine loaded by the main page.

Do not mistake a backup or an unused duplicate for the active implementation. Confirm the reference in `index.html` before changing a bundle.

### Styles: `css/`

- `css/styles.less` is the global Less entry point.
- It imports `reset.css`, intro styles, mixins, animations, the picker, room styles, and the individual room/view/puzzle style files.
- `css/styles.css` is the compiled stylesheet referenced by `index.html`.
- Individual files such as `room.less`, `corridor.less`, `bathroom.less`, `last_corridor.less`, and `keypad.less` contain component- or room-specific rules.

When styling a room or shared component, find the relevant Less source and its import relationship in `styles.less`. Do not add an unimported Less file and assume it affects the deployed page.

### Assets

- `images/`: room backgrounds, objects, character sprites, masks, UI graphics, and inventory thumbnails.
- `sound/`: local game audio. The repository contains MP3 and OGG variants for sounds.
- `fonts/`: the Furore and Silkscreen web-font files in TTF and WOFF formats.
- `swf/`: legacy SoundManager Flash assets.

Asset filenames are referenced by HTML, CSS, and JavaScript. Preserve exact names and case. When replacing an asset, search all references and test the result in the browser.

## 5. Room Engine and Interaction Model

### Room generation

Room definitions live in `js/game.js`. A normal room method calls `room.generate({...})` with settings such as:

- `inject`: root HTML fragment name.
- `grid_width` and `grid_height`: room grid dimensions.
- `collision_nodes`: tile IDs that the player cannot walk through.
- `player`, `player_position_x`, and `player_position_y`: player element and starting tile.
- `player_speed`: movement animation speed.
- `drag_room`: whether the room viewport can be dragged.
- `volume`: background-room sound volume.
- `execute`: room-specific setup callback, usually binding interactions and triggering the appropriate scene.

The room engine in `js/room.js` loads `<inject>.html`, writes the active room to `is_in`, draws the tile grid, places the player, applies collision and item state, initializes viewport/player behavior, calls the room's `execute` callback, and centers the view.

The default tile dimensions in `room.js` are approximately 69.282 pixels wide by 40 pixels high. The movement system uses grid coordinates and an A* pathfinding implementation. The README credits Andrea Giammarchi for the A* algorithm; preserve that attribution if the implementation is changed or reused.

### DOM and game-state contracts

Interactions commonly select elements by IDs such as `#door_room`, `#note`, `#player`, or grid tile IDs such as `#5-6`. Room scripts also use attributes including `data-x`, `data-y`, `data-z`, `data-info`, and `data-tooltip`.

The HTML, JavaScript, and Less for a room must agree:

- An element used by a click handler must exist in that room fragment.
- An element that participates in walking/collision must be represented correctly in the grid and collision settings.
- An object that should be hidden after collection/use must use the existing item-state mechanism.
- Stacking and overlap behavior may depend on tile z-index data, masks, transparency helpers, and CSS positioning.
- Tooltips and inventory text are commonly supplied with `data-tooltip` and `data-info`.

When a click appears to do nothing, trace the complete chain: the HTML ID, the handler in `game.js`, the target grid coordinate, the pathfinding result, the handler callback, the scene/state update, and any save write. Do not patch only the visual symptom.

### Adding or changing a room

For a new normal room, follow this checklist:

1. Add a `game.<roomName>(x, y)` method in `js/game.js`.
2. Call `room.generate()` with `inject: '<roomName>'` and appropriate grid, collision, player, audio, and execute settings.
3. Add the matching root fragment `<roomName>.html`.
4. Add the room's visual rules in `css/<roomName>.less` and import that file from `css/styles.less`.
5. Update the compiled runtime CSS and JavaScript outputs as appropriate.
6. Add the transition into and out of the room, including the correct tile targets and action callbacks.
7. Ensure saved progress can resume in that room through the `is_in` dispatch near the end of `js/game.js`.
8. Add any required images/sounds without breaking existing paths or credits.
9. Test entry, exit, movement, collisions, object interactions, save/reload, and return to the room.

A special scene such as `scene.cabin()` may load its own fragment and set `is_in` itself. Follow the existing implementation pattern for that type of scene rather than forcing every scene into `room.generate()`.

## 6. Persistent State and Save Compatibility

### Storage implementation

The game uses the jStorage plugin (`$.jStorage`) rather than a backend. The current data initialization is in `js/data.js`.

Important persisted values observed in the source include:

| Key | Meaning / use |
| --- | --- |
| `v` | Save-data version. Currently initialized to version 9. |
| `collected` | IDs of collected inventory items. |
| `used` | IDs/items recorded as used. |
| `played` | Scene and puzzle completion flags. |
| `is_in` | Current room/scene identifier, used when resuming. |
| `fish` | Fish-related progression flags. |
| `temp_path` | Temporary path data used by the room/player system. |
| `this_path` | Additional path state referenced by the room engine. |
| `mute` | Sound mute preference, stored by the audio controls. |

The room engine restores collected and used item state when a room is generated. Scene flags in `played` control whether some events or puzzles should run again.

### Save-version warning

In `js/data.js`, when the code's version number is greater than the stored `v`, the current implementation calls `$.jStorage.flush()`. This clears the complete jStorage store before initializing fresh defaults. It is therefore a destructive save reset, not a granular migration.

**Do not increment the save version casually.** Before changing it:

1. Determine whether the current change actually requires a save-schema change.
2. Identify all affected keys and existing save shapes.
3. Prefer a deliberate migration that preserves valid player progress when appropriate.
4. If a full reset is genuinely intended, make that behavior explicit and test it.
5. Verify new-game initialization and reload/resume behavior after the change.

Do not replace jStorage with direct `localStorage` calls in one module while leaving the rest of the game on jStorage.

## 7. JavaScript and Styling Conventions

- This is an older jQuery application using global objects such as `game`, `room`, `scene`, `items`, `settings`, `npc`, and SoundManager sound globals.
- Preserve the established script/module boundaries and ES5-era syntax unless modernization is explicitly requested.
- Keep callbacks and event handlers consistent with the surrounding code. Many interactions are wired inside each room's `execute` callback.
- Be careful with delegated handlers, timers, animation callbacks, and handlers that are registered each time a room is entered. Prevent duplicate listeners and stale timers when changing repeated room-entry behavior.
- Preserve the existing jQuery plugins and their expected methods, including `.draggable()`, `.sprite()`, `.spState()`, `.transition()`, `.tooltip()`, and `.text_cloud()`.
- Use existing helpers in `room.js` where appropriate, including collision setup, collected/used-item restoration, transparency, pulse, centering, and player pathfinding.
- Keep visual changes in Less sources and respect the current layering/masking approach. Avoid arbitrary z-index changes until the tile's `data-z` behavior and overlapping sprites have been checked.
- Do not reformat or hand-edit large minified vendor files as a substitute for changing application source.

## 8. Audio and Asset Rules

The audio manager is initialized in `js/audio.js`. It selects MP3 when `Modernizr.audio.mp3` is available and otherwise selects OGG, then registers local sounds from the `sound/` directory.

When adding or replacing a sound:

- Follow the existing sound registration and naming pattern.
- Keep the expected MP3/OGG alternatives available when the project expects both formats.
- Check the filename, extension selection, and local URL construction.
- Test the sound at the intended room volume and test the mute/unmute control.
- Preserve the existing SoundManager setup and legacy SWF assets unless a task specifically addresses audio compatibility.

The README includes credits for sounds, graphics, and JavaScript libraries. The license file is MIT for the project source, but individual third-party assets may have their own attribution or usage terms. Do not assume the MIT license overrides asset-specific terms.

## 9. Build, Preview, and Deployment

### Build pipeline

The repository contains `config.codekit` and `config.codekit3`. The CodeKit 3 configuration maps application source files to minified runtime outputs; for example, `js/game.js` maps to `js/min/game-min.js`, and `js/room.js` maps to `js/min/room-min.js`. The Less entry point `css/styles.less` maps to `css/styles.css`.

The main page loads those generated runtime files, not the unminified application files. Therefore:

- Editing only `js/game.js` or another source file is insufficient for the published runtime unless its corresponding `js/min/*-min.js` output is regenerated or updated.
- Editing only a generated bundle is fragile because a later CodeKit build can overwrite it.
- Editing only a Less source is insufficient unless `css/styles.css` is regenerated or deliberately synchronized.
- After rebuilding, inspect the generated output and confirm that the paths referenced by `index.html` exist.

The `config.codekit3` file contains a warning that it is a CodeKit-owned configuration format and should not be edited or processed with a generic JSON formatter/parser. Preserve it unless a task specifically requires changing the CodeKit project configuration.

### Build and test tooling

No `package.json`, npm scripts, conventional JavaScript bundler configuration, automated test suite, or CI workflow was present in the inspected repository tree. Do not invent commands such as `npm run build` or claim that automated tests exist.

For local browser testing, serve the repository root over HTTP. If Python 3 is available, a simple preview server can be started from the repository root with:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`. Any equivalent static HTTP server is acceptable. This is a preview method, not a project-defined build command.

### Deployment

The repository's default branch is `gh-pages`, and the root contains a `CNAME` file. Preserve the static-site layout and the deployment-related root files. Do not move the entry point or assets into a new output directory unless the publishing configuration is intentionally changed and verified.

## 10. Manual Verification Checklist

There is no committed automated test suite, so perform browser checks appropriate to the change. At minimum, consider:

- [ ] The site loads from the root URL without missing CSS, JavaScript, HTML fragments, images, fonts, or audio requests.
- [ ] The intro screen appears and the Enter interaction starts a new game.
- [ ] Existing saved progress resumes into the correct room/scene.
- [ ] The player appears at the expected grid coordinate and can move along valid paths.
- [ ] Collision nodes prevent walking through walls and solid objects.
- [ ] Interactive objects respond to clicks and pathfinding reaches their intended target.
- [ ] Item pickup, inventory display, item use, and item persistence work.
- [ ] Dialogue options and puzzle success/failure flows work.
- [ ] Scene flags prevent completed cutscenes/puzzles from unexpectedly replaying.
- [ ] Room transitions load the correct HTML fragment and start the right background audio.
- [ ] Reloading during/after the relevant room or scene restores sensible state.
- [ ] Mute/unmute works and the appropriate MP3/OGG file is requested.
- [ ] The room layout, masks, transparency, stacking order, viewport centering, and drag behavior remain correct.
- [ ] The browser console contains no new JavaScript errors.
- [ ] The Network panel shows no new 404s, especially for minified bundles and dynamically loaded HTML fragments.

For a save-related change, test both a fresh browser storage state and an existing save. For a room-specific change, test the room from every relevant entry/exit path, not only by loading the fragment directly.

## 11. Common Failure Patterns and Debugging Order

When something breaks, investigate in this order:

1. **Startup failure:** inspect the Modernizr branch, script order, missing bundle paths, and `soundManager.onready()`.
2. **Blank/missing room:** verify the `inject` name, matching HTML filename, HTTP request path, and fragment contents.
3. **Click does nothing:** verify the element ID, handler registration, overlay state, target tile, pathfinding, and callback.
4. **Player cannot reach an object:** inspect grid dimensions, collision nodes, tile IDs, and the A* path rather than changing animation positions first.
5. **Object appears behind/in front incorrectly:** inspect tile `data-z`, masks, transparent elements, and the related Less stacking rules.
6. **Progress disappears or replays:** inspect jStorage keys, `played` flags, the `is_in` value, and save version logic.
7. **Sound is missing:** inspect the sound name, file extension, MP3/OGG availability, Modernizr audio result, room volume, and SoundManager readiness.
8. **Change works locally but not on the published site:** verify that the generated `js/min/` or `css/styles.css` runtime artifact was updated and that the change was committed to the publishing branch.

Avoid speculative broad fixes. Establish which layer is failing and make the smallest change that corrects the actual cause.

## 12. Completion and Handoff Expectations

When finishing a task:

- Summarize the actual files changed and the behavior affected.
- Explain any save compatibility impact, including whether existing progress is preserved or reset.
- List the checks that were actually performed and their results.
- Explicitly disclose checks that were not possible.
- Mention remaining known risks or follow-up work instead of describing unverified behavior as complete.

The goal is to keep The House understandable, playable, and maintainable within its existing architecture while making the requested change directly and safely.
