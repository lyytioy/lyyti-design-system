import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Search = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <circle
      className="search_svg__a"
      cx={9.813}
      cy={9.812}
      r={9.063}
      transform="rotate(-23.025 9.813 9.812)"
    />,
    <path className="search_svg__a" d="M16.221 16.22l7.029 7.03" />
  );

export default Search;
