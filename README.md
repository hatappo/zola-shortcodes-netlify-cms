# Zola Shortcodes for Netlify CMS Editor Components


## Shortcodes in Zola

[Zola own built-in](https://www.getzola.org/documentation/content/shortcodes/#built-in-shortcodes)

1. Gist
2. Streamable
3. Vimeo
4. YouTube

[Theme - DeepThought](https://github.com/RatanShreshtha/DeepThought)

1. Chart
2. Galleria
3. Katex
4. mapbox
5. Mermaid
6. Vimeo
7. YouTube

- [Docs](https://github.com/RatanShreshtha/DeepThought/blob/main/content/docs/extended-shortcodes/index.md)
- [HTML](https://github.com/RatanShreshtha/DeepThought/tree/main/templates/shortcodes)


## Usage

1. Add or checkout [the javascript file](/dist/zola-shortcodes-netlify-cms.built-in.js) to the `static` directory in your Zola project.
2. Then, load it after the `netlify-cms.js` script tag.

e.g. If you put the JS file in `static/js` directory, you can write the following in `stacic/admin/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <link href="/_cms/config.yml" type="text/yaml" rel="cms-config-url">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </head>
  <body>
    <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
    <script src="/js/dist/zola-shortcodes-netlify-cms.built-in.js"></script><!-- HERE -->
  </body>
</html>
```


## Original Shortcodes by Themes

Choose one of `zola-shortcodes-netlify-cms.<THEME_NAME>.js` in `dist` directory, which you want.


## Screenshot

![/screenshot-shortcodes-on-cms.png](/screenshot-shortcodes-on-cms.png "")


## Reference

Netlify CMS Editor Components
- [Creating Custom Widgets | Netlify CMS | Open-Source Content Management System](https://www.netlifycms.org/docs/custom-widgets/#registereditorcomponent)
- [netlify-cms/index.js at 92d8c50272835201229d4265ef2ee18ee657dc17 · netlify/netlify-cms](https://github.com/netlify/netlify-cms/blob/92d8c50272835201229d4265ef2ee18ee657dc17/packages/netlify-cms-editor-component-image/src/index.js)

Zola Shortcodes
- [Shortcodes | Zola](https://www.getzola.org/documentation/content/shortcodes/)
- [zola/components/templates/src/builtins/shortcodes at v0.14.1 · getzola/zola](https://github.com/getzola/zola/tree/v0.14.1/components/templates/src/builtins/shortcodes)

