import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Share = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.share-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="share-3_svg__a"
      d="M15.75 15.75v6a1.5 1.5 0 01-1.5 1.5h-12a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5H3"
    />,
    <path
      className="share-3_svg__a"
      d="M15.75 12.75v-3h-4.5a1.5 1.5 0 00-1.5 1.5v3s-3-1.5-3-4.5v-3a3 3 0 013-3h6v-3l7.5 6z"
    />
  );

export default Share;
