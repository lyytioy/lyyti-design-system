import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Eye = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.view-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="view-1_svg__a"
      d="M12 5.251C7.969 5.183 3.8 8 1.179 10.885a1.663 1.663 0 000 2.226C3.743 15.935 7.9 18.817 12 18.748c4.1.069 8.258-2.813 10.824-5.637a1.663 1.663 0 000-2.226C20.2 8 16.031 5.183 12 5.251z"
    />,
    <path
      className="view-1_svg__a"
      d="M15.75 12A3.75 3.75 0 1112 8.249 3.749 3.749 0 0115.75 12z"
    />
  );

export default Eye;
