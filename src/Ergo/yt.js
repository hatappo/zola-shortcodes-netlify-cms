CMS.registerEditorComponent({
  id: "yt",
  label: "yt (YouTube)",
  fields: [
    {
      name: "id",
      label: "the video id (mandatory)",
      widget: "string"
    },
    {
      name: "autoplay",
      label: "when set to \"true\", the video autoplays on load (optional)",
      widget: "boolean"
    },
    {
      name: "class",
      label: "a class to add to the <div> surrounding the iframe (optional)",
      widget: "string"
    },
  ],
  pattern: /{{ youtube\(id="([-_a-zA-Z0-9]+)"(, autoplay=(true|false))?(, class="([a-zA-Z][-_.:a-zA-Z0-9 ]*)")?\) }}/,
  fromBlock: function(match) {
    return {
      id: match[1],
      autoplay: match[3],
      class: match[5],
    };
  },
  toBlock: function(obj) {
    const id = obj.id || '';
    const a = !!obj.autoplay ? `, autoplay=${obj.autoplay}` : '';
    const c = !!obj.class ? `, class="${obj.class}"` : '';
    return `{{ youtube(id="${id}"${a}${c}) }}`;
  },
  toPreview: function(obj) {
    const id = obj.id || '';
    return `<img src="http://img.youtube.com/vi/${id}/mqdefault.jpg" alt="Youtube Video"/>`;
  },
});
