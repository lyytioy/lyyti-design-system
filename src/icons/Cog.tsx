import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Cog = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.cog_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="cog_svg__a"
      d="M10.546 2.438a1.957 1.957 0 002.908 0L14.4 1.4a1.959 1.959 0 013.41 1.413l-.071 1.4a1.958 1.958 0 002.051 2.054l1.4-.071a1.959 1.959 0 011.41 3.41l-1.042.94a1.96 1.96 0 000 2.909l1.042.94a1.959 1.959 0 01-1.413 3.41l-1.4-.071a1.958 1.958 0 00-2.056 2.056l.071 1.4A1.959 1.959 0 0114.4 22.6l-.941-1.041a1.959 1.959 0 00-2.908 0L9.606 22.6A1.959 1.959 0 016.2 21.192l.072-1.4a1.958 1.958 0 00-2.056-2.056l-1.4.071A1.958 1.958 0 011.4 14.4l1.041-.94a1.96 1.96 0 000-2.909L1.4 9.606A1.958 1.958 0 012.809 6.2l1.4.071a1.958 1.958 0 002.058-2.06L6.2 2.81A1.959 1.959 0 019.606 1.4z"
    />,
    <circle className="cog_svg__a" cx={12} cy={12.001} r={4.5} />
  );

export default Cog;
