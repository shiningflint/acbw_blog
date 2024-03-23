# Notes

## Hugo Theme
ACBW hugo theme is located at `themes/acbw`

### Layouts per Content
The default layout is `themes/acbw/layouts/_default`.
You can override the layout based on content category.
For example:
In the content, you have `content/maps`
You can have custom layouts in `themes/acbw/layouts/maps/single.html`

### Adding Vendor JS
I put the vendor JS file in `acbw_blog/static/vendor/OpenLayers.js`
and then create the script file in `head.html`
`<script src="{{ .Params.js }}"></script>`
so in each post I can add `js: /vendor/OpenLayers.js`

I know this is a stupid solution for now. But it works.

## Embedding Open Street Map in HUGO
Use the library called OpenLayers

### OpenLayers
OpenLayers simple example
https://wiki.openstreetmap.org/wiki/OpenLayers_Simple_Example

OpenLayers GPX track example
https://wiki.openstreetmap.org/wiki/Openlayers_Track_example
