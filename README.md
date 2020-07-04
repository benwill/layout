### In Progress

- Collapsable panel at runtime
- Still need to think about components that 'FILL' vs 'Inline', e.g. they need to sit inside a box/top-bottom or row
- - Can specify what components can be dropped?
- Another option, let card itself specify if it 'grows' or sets a height? / similar to the box component?
- Absolute positioned container, allow pixel perfect dnd
- 'TEMPLATES', pre-made pages with droppable areas

### Todos

- Up to component to decide how to remove?
- Adding drop zones in between components (Render area helper..) (Should be able to use renderDropZone + index)
- // useful reasd, custom context + selectors https://react-redux.js.org/api/hooks#custom-context

# As a library

- Initialize widgets, in a single ton, whats a good pattern for this, rather than relying on props down the chain (Possibly some kind of initConfig from the root?)
- Look at using redux as a 'library' hide away the redux implementation? / or inject as middleware
- Is it even worth doing the above? Should we just expose actions which can be overriden?
- Import a reducer for it?.. this completely ties us into redux though
- another option would be to use a ref to extract data out of the Layout component when required? e.g. a save?

# Fancy stuff

- Certain widgets only support [x,y,z] to drop
