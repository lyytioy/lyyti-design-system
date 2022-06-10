const template = (variables, { tpl }) => {
  const componentName = variables.componentName.replace('Svg', '');
  variables.componentName = componentName;
  variables.exports[0].declaration.name = componentName;

  return tpl`
    import { createElement } from 'react';
    import SvgIcon from '@mui/material/SvgIcon';
    const ${variables.componentName} = (props: any) => createElement(SvgIcon, props, ${variables.jsx.children});

    ${variables.exports};
  `;
};
module.exports = template;
