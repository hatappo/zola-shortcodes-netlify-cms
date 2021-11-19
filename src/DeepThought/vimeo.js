CMS.registerEditorComponent({
  id: "vimeo",
  label: "Vimeo",
  fields: [
    {
      name: "id",
      label: "the video id (mandatory)",
      widget: "string"
    },
  ],
  pattern: /{{ vimeo\(id="([0-9]+)"\) }}/,
  fromBlock: function(match) {
    return {
      id: match[1],
    };
  },
  toBlock: function(obj) {
    const id = obj.id || '';
    return `{{ vimeo(id="${id}") }}`;
  },
  toPreview: function(obj) {
    const id = obj.id || '';
    return `{{ vimeo(id="${id}") }}`;
  },
});
