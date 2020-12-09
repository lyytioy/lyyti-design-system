function template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports },
) {
    return template.ast`
    ${imports}
    import SvgIcon from '@material-ui/core/SvgIcon'
    const ${componentName} = (${props}) => React.createElement(SvgIcon, props, ${jsx.children})
    ${exports}`;
}
module.exports = template
