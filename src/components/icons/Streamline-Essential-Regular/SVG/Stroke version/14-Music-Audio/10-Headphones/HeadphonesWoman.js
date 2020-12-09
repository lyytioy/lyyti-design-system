import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphonesWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-woman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="headphones-woman_svg__a"
      d="M7.769 10.983v.995a5.906 5.906 0 01-.858 3.269M16.009 10.983v.995a5.905 5.905 0 00.859 3.269M7.781 11.2a5.477 5.477 0 004.108-1.9A5.479 5.479 0 0016 11.2"
    />,
    <circle
      className="headphones-woman_svg__a"
      cx={11.889}
      cy={10.872}
      r={4.122}
    />,
    <rect
      className="headphones-woman_svg__a"
      x={19.5}
      y={9.75}
      width={3}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="headphones-woman_svg__a"
      x={1.5}
      y={9.75}
      width={3}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="headphones-woman_svg__a"
      d="M19.5 12V8.25A7.522 7.522 0 0012 .75a7.522 7.522 0 00-7.5 7.5V12M19.426 23.25a7.877 7.877 0 00-14.852 0"
    />
  );

export default SvgHeadphonesWoman;
