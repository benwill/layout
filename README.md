### In Progress

- Build some better examples:
- eg.. page, with rhp and sample charts
- Add KPIs + image examples
- Make a decent looking page
- Think about 'GROWING' content (Charts, images) vs inline content
- - Can specify supported drops

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
