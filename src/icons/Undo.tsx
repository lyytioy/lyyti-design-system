import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Undo = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.undo_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path className="undo_svg__a" d="M.75.748v7.5h7.5M12 23.248a11.25 11.25 0 10-10.6-15" />
  );

export default Undo;
