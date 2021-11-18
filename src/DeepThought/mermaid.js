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
