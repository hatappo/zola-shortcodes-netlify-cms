CMS.registerEditorComponent({
  id: "vm",
  label: "vm (Vimeo)",
  fields: [
    {
      name: "id",
      label: "the video id (mandatory)",
      widget: "string"
    },
    {
      name: "class",
      label: "a class to add to the <div> surrounding the iframe (optional)",
      widget: "string"
    },
  ],
  pattern: /{{ vm\(id="([-a-zA-Z0-9]+)"(, class="([a-zA-Z][-_.:a-zA-Z0-9 ]*)")?\) }}/,
  fromBlock: function(match) {
    return {
      id: match[1],
      class: match[3],
    };
  },
  toBlock: function(obj) {
    const id = obj.id || '';
    const c = !!obj.class ? `, class="${obj.class}"` : '';
    return `{{ vm(id="${id}"${c}) }}`;
  },
  toPreview: function(obj) {
    const id = obj.id || '';
    const c = !!obj.class ? `, class="${obj.class}"` : '';
    return `{{ vm(id="${id}"${c}) }}`;
  },
});
