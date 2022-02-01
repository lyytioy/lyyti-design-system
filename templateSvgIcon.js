function template({ template }, opts, { imports, componentName, props, jsx, exports }) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  return typeScriptTpl.ast`
    ${imports}
    import SvgIcon from '@mui/material/SvgIcon'
    const ${componentName} = (props: any) => React.createElement(SvgIcon, props, ${jsx.children})
    ${exports}`;
}
module.exports = template;
