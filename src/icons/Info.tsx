import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Info = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.information-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="information-circle_svg__a"
      d="M14.25 16.5h-.75A1.5 1.5 0 0112 15v-3.75a.75.75 0 00-.75-.75h-.75M11.625 6.75a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <circle className="information-circle_svg__a" cx={12} cy={12} r={11.25} />
  );

export default Info;
