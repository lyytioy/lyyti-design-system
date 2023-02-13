import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Plus = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.plus_icon{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path className="plus_icon" d="M.75 12h22.5M12 .75v22.5" />
  );

export default Plus;
