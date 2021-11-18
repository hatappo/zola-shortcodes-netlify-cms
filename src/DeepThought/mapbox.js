CMS.registerEditorComponent({
  id: "mapbox",
  label: "Mapbox",
  fields: [
    {
      name: "body",
      label: "the body text",
      widget: "text"
    },
    {
      name: "zoom",
      label: "zoom level. see https://docs.mapbox.com/help/glossary/zoom-level/",
      widget: "number"
    },
  ],
  pattern: /^{% mapbox\(zoom=([0-9]+)\) %}\n(.*?)\n^{% end %}$/ms,
  fromBlock: function(match) {
    return {
      zoom: match[1],
      body: match[2],
    };
  },
  toBlock: function(obj) {
    const zoom = obj.zoom ?? 10;
    const body = obj.body || '';
    return `
{% mapbox(zoom=${zoom}) %}
${body}
{% end %}
`;
  },
  toPreview: function(obj) {
    const zoom = obj.zoom ?? 10;
    const body = obj.body || '';
    return `
{% mapbox(zoom=${zoom}) %}
${body}
{% end %}
`;
  },
});
