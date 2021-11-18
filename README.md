# Zola Shortcodes for Netlify CMS editor

## [built-in shortcodes in Zola](https://www.getzola.org/documentation/content/shortcodes/#built-in-shortcodes)

1. YouTube
2. Vimeo
3. Streamable
4. Gist

## Usage

1. Add or checkout [the javascript file](/zola-shortcodes-netlify-cms.js) to the `static` directory in your Zola project.
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
    <script src="/js/zola-shortcodes-netlify-cms.js"></script><!-- HERE -->
  </body>
</html>

```

## Screenshot

![/screenshot-shortcodes-on-cms.png](/screenshot-shortcodes-on-cms.png "")


