import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Filter = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.filter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <ellipse className="filter_svg__a" cx={12} cy={5.25} rx={9.75} ry={4.5} />,
    <path
      className="filter_svg__a"
      d="M2.25 5.25a9.747 9.747 0 007.5 9.479V21a2.25 2.25 0 004.5 0v-6.271a9.747 9.747 0 007.5-9.479"
    />
  );

export default Filter;
