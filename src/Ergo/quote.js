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
