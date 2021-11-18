CMS.registerEditorComponent({
  id: "youtube",
  label: "YouTube",
  fields: [{
    name: "id",
    label: "the video id (mandatory)",
    widget: "string"
  },
  {
    name: "playlist",
    label: "the playlist id (optional)",
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
  pattern: /{{ youtube\(id="([-a-zA-Z0-9]+)"(, playlist="([a-zA-Z0-9]+)")?(, autoplay=(true|false))?(, class="([a-zA-Z][-_.:a-zA-Z0-9 ]*)")?\) }}/,
  fromBlock: function(match) {
    return {
      id: match[1],
      playlist: match[3],
      autoplay: match[5],
      class: match[7],
    };
  },
  toBlock: function(obj) {
    const id = obj.id || '';
    const p = !!obj.playlist ? `, playlist="${obj.playlist}"` : '';
    const a = !!obj.autoplay ? `, autoplay=${obj.autoplay}` : '';
    const c = !!obj.class ? `, class="${obj.class}"` : '';
    return `{{ youtube(id="${id}"${p}${a}${c}) }}`;
  },
  toPreview: function(obj) {
    return `<img src="http://img.youtube.com/vi/${obj.id}/mqdefault.jpg" alt="Youtube Video"/>`;
  },
});
