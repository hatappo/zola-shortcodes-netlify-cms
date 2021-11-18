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
