import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const HeavyPlus = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.heavy_plus_icon{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px}'
        }
      </style>
    </defs>,
    <path className="heavy_plus_icon" d="M.75 12h22.5M12 .75v22.5" />
  );

export default HeavyPlus;
