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
CMS.registerEditorComponent({
  id: "quote",
  label: "Quote",
  fields: [
    {
      name: "body",
      label: "the body text",
      widget: "text"
    },
    {
      name: "author",
      label: "ahuthor name",
      widget: "string"
    },
  ],
  pattern: /^{% quote\((author="([^\n]*)\")?\) %}\n(.*?)\n^{% end %}$/ms,
  fromBlock: function(match) {
    return {
      author: match[2],
      body: match[3],
    };
  },
  toBlock: function(obj) {
    const a = `author="${obj.author || ''}"`;
    const body = obj.body || '';
    return `
{% quote(${a}) %}
${body}
{% end %}
`;
  },
  toPreview: function(obj) {
    const author = obj.author || undefined;
    const body = obj.body || '';
    return `
{% quote(${a}) %}
${body}
{% end %}
`;
  },
});
CMS.registerEditorComponent({
  id: "streamable",
  label: "Streamable",
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
  pattern: /{{ streamable\(id="([a-zA-Z0-9]+)"(, class="([a-zA-Z][-_.:a-zA-Z0-9 ]*)")?\) }}/,
  fromBlock: function(match) {
    return {
      id: match[1],
      class: match[3],
    };
  },
  toBlock: function(obj) {
    const id = obj.id || '';
    const c = !!obj.class ? `, class="${obj.class}"` : '';
    return `{{ streamable(id="${id}"${c}) }}`;
  },
  toPreview: function(obj) {
    const id = obj.id || '';
    const c = !!obj.class ? `, class="${obj.class}"` : '';
    return `{{ streamable(id="${id}"${c}) }}`;
  },
});
CMS.registerEditorComponent({
  id: "vimeo",
  label: "Vimeo",
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
  pattern: /{{ vimeo\(id="([0-9]+)"(, class="([a-zA-Z][-_.:a-zA-Z0-9 ]*)")?\) }}/,
  fromBlock: function(match) {
    return {
      id: match[1],
      class: match[3],
    };
  },
  toBlock: function(obj) {
    const id = obj.id || '';
    const c = !!obj.class ? `, class="${obj.class}"` : '';
    return `{{ vimeo(id="${id}"${c}) }}`;
  },
  toPreview: function(obj) {
    const id = obj.id || '';
    const c = !!obj.class ? `, class="${obj.class}"` : '';
    return `{{ vimeo(id="${id}"${c}) }}`;
  },
});
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
CMS.registerEditorComponent({
  id: "youtube",
  label: "YouTube",
  fields: [
    {
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
  pattern: /{{ youtube\(id="([-_a-zA-Z0-9]+)"(, playlist="([-_a-zA-Z0-9]+)")?(, autoplay=(true|false))?(, class="([a-zA-Z][-_.:a-zA-Z0-9 ]*)")?\) }}/,
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
    const id = obj.id || '';
    return `<img src="http://img.youtube.com/vi/${id}/mqdefault.jpg" alt="Youtube Video"/>`;
  },
});
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
