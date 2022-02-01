import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Loading = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.loading-half_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <circle className="loading-half_svg__a" cx={19.5} cy={11.997} r={3.75} />,
    <path
      className="loading-half_svg__a"
      d="M8.625 22.5a.375.375 0 10.375.372.375.375 0 00-.375-.375"
    />,
    <circle className="loading-half_svg__a" cx={2.25} cy={16.497} r={1.5} />,
    <circle className="loading-half_svg__a" cx={4.125} cy={7.872} r={1.875} />,
    <circle className="loading-half_svg__a" cx={12.375} cy={3.372} r={2.625} />
  );

export default Loading;
