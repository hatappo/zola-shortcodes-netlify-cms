CMS.registerEditorComponent({
  id: "chart",
  label: "Chart",
  fields: [
    {
      name: "body",
      label: "the body text",
      widget: "text"
    },
  ],
  pattern: /^{% chart\(\) %}\n(.*?)\n^{% end %}$/ms,
  fromBlock: function(match) {
    return {
      body: match[1],
    };
  },
  toBlock: function(obj) {
    const body = obj.body || '';
    return `
{% chart() %}
${body}
{% end %}
`;
  },
  toPreview: function(obj) {
    const body = obj.body || '';
    return `
{% chart() %}
${body}
{% end %}
`;
  },
});
CMS.registerEditorComponent({
  id: "galleria",
  label: "Galleria",
  fields: [
    {
      name: "body",
      label: "the body text",
      widget: "text"
    },
  ],
  pattern: /^{% galleria\(\) %}\n(.*?)\n^{% end %}$/ms,
  fromBlock: function(match) {
    return {
      body: match[1],
    };
  },
  toBlock: function(obj) {
    const body = obj.body || '';
    return `
{% galleria() %}
${body}
{% end %}
`;
  },
  toPreview: function(obj) {
    const body = obj.body || '';
    return `
{% galleria() %}
${body}
{% end %}
`;
  },
});
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
  id: "katex",
  label: "Katex",
  fields: [
    {
      name: "body",
      label: "the body text",
      widget: "text"
    },
    {
      name: "block",
      label: "if true, add `mode=display` into type of the script tag.",
      widget: "boolean"
    },
  ],
  pattern: /^{% katex\(block=(true|false)\) %}\n(.*?)\n^{% end %}$/ms,
  fromBlock: function(match) {
    return {
      block: match[1],
      body: match[2],
    };
  },
  toBlock: function(obj) {
    const block = !!obj.block;
    const body = obj.body || '';
    return `
{% katex(block=${block}) %}
${body}
{% end %}
`;
  },
  toPreview: function(obj) {
    const block = !!obj.block;
    const body = obj.body || '';
    return `
{% katex(block=${block}) %}
${body}
{% end %}
`;
  },
});
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
CMS.registerEditorComponent({
  id: "mermaid",
  label: "Mermaid",
  fields: [
    {
      name: "body",
      label: "the body text",
      widget: "text"
    },
  ],
  pattern: /^{% mermaid\(\) %}\n(.*?)\n^{% end %}$/ms,
  fromBlock: function(match) {
    return {
      body: match[1],
    };
  },
  toBlock: function(obj) {
    const body = obj.body || '';
    return `
{% mermaid() %}
${body}
{% end %}
`;
  },
  toPreview: function(obj) {
    const body = obj.body || '';
    return `
{% mermaid() %}
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
  ],
  pattern: /{{ vimeo\(id="([0-9]+)"\) }}/,
  fromBlock: function(match) {
    return {
      id: match[1],
    };
  },
  toBlock: function(obj) {
    const id = obj.id || '';
    return `{{ vimeo(id="${obj.id || ''}") }}`;
  },
  toPreview: function(obj) {
    const id = obj.id || '';
    return `{{ vimeo(id="${obj.id || ''}") }}`;
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
  ],
  pattern: /{{ youtube\(id="([a-zA-Z0-9]+)"\) }}/,
  fromBlock: function(match) {
    return {
      id: match[1],
    };
  },
  toBlock: function(obj) {
    const id = obj.id || '';
    return `{{ youtube(id="${obj.id || ''}") }}`;
  },
  toPreview: function(obj) {
    return `<img src="http://img.youtube.com/vi/${obj.id}/mqdefault.jpg" alt="Youtube Video"/>`;
  },
});
