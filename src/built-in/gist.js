CMS.registerEditorComponent({
  id: "gist",
  label: "Gist",
  fields: [
    {
      name: "username",
      label: "Github Username (mandatory)",
      widget: "string"
    },
    {
      name: "gid",
      label: "Gist ID (mandatory)",
      widget: "string"
    },
    {
      name: "file",
      label: "by default, the shortcode will pull every file from the URL unless a specific filename is requested (optional)",
      widget: "string"
    },
    {
      name: "class",
      label: "a class to add to the <div> surrounding the iframe (optional)",
      widget: "string"
    },
  ],
  pattern: /{{ gist\(url="https:\/\/gist\.github\.com\/([-a-zA-Z0-9]+)\/([a-zA-Z0-9]+)"(, file="([-_.a-zA-Z0-9]+)")?(, class="([a-zA-Z][-_.:a-zA-Z0-9 ]*)")?\) }}/,
  fromBlock: function(match) {
    return {
      username: match[1],
      gid: match[2],
      file: match[4],
      class: match[6],
    };
  },
  toBlock: function(obj) {
    const gid = obj.gid || '';
    const username = obj.username || '';
    const f = !!obj.file ? `, file="${obj.file}"` : '';
    const c = !!obj.class ? `, class="${obj.class}"` : '';
    return `{{ gist(url="https://gist.github.com/${username}/${gid}"${f}${c}) }}`;
  },
  toPreview: function(obj) {
    const gid = obj.gid || '';
    const username = obj.username || '';
    const f = !!obj.file ? `, file="${obj.file}"` : '';
    const c = !!obj.class ? `, class="${obj.class}"` : '';
    return `{{ gist(url="https://gist.github.com/${username}/${gid}"${f}${c}) }}`;
  },
});
