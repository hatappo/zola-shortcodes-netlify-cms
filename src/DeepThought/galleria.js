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
