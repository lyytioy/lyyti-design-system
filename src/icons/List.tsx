import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const List = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.list-bullets_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <circle className="list-bullets_svg__a" cx={3} cy={2.998} r={2.25} />,
    <circle className="list-bullets_svg__a" cx={3} cy={11.998} r={2.25} />,
    <circle className="list-bullets_svg__a" cx={3} cy={20.998} r={2.25} />,
    <path className="list-bullets_svg__a" d="M8.25 3.748h15M8.25 12.748h15M8.25 21.748h15" />
  );

export default List;
