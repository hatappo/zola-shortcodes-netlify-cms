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
