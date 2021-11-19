CMS.registerEditorComponent({
  id: "issue",
  label: "GitHub Issue",
  fields: [
    {
      name: "id",
      label: "the issue id (mandatory)",
      widget: "number"
    },
  ],
  pattern: /{{ issue\(id=([1-9][0-9]*)\) }}/,
  fromBlock: function(match) {
    return {
      id: match[1],
    };
  },
  toBlock: function(obj) {
    const id = obj.id || '';
    return `{{ issue(id=${id}) }}`;
  },
  toPreview: function(obj) {
    const id = obj.id || '';
    return `<a href="">Github Issue #${id}</a>`;
  },
});
