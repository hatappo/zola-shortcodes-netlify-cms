CMS.registerEditorComponent({
  id: "youtube",
  label: "YouTube",
  fields: [
    {
      name: "id",
      label: "the video id (mandatory)",
      widget: "string"
    },
  ],
  pattern: /{{ youtube\(id="([-_a-zA-Z0-9]+)"\) }}/,
  fromBlock: function(match) {
    return {
      id: match[1],
    };
  },
  toBlock: function(obj) {
    const id = obj.id || '';
    return `{{ youtube(id="${id}") }}`;
  },
  toPreview: function(obj) {
    const id = obj.id || '';
    return `<img src="http://img.youtube.com/vi/${id}/mqdefault.jpg" alt="Youtube Video"/>`;
  },
});
