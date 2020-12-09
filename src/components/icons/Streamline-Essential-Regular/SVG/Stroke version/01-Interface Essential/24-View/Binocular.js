import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBinocular = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".binocular_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="binocular_svg__a" cx={5.25} cy={18} r={4.5} />,
    <path
      className="binocular_svg__a"
      d="M9.75 18V4.125a2.625 2.625 0 00-5.156-.7L.911 16.805"
    />,
    <circle className="binocular_svg__a" cx={18.75} cy={18} r={4.5} />,
    <path
      className="binocular_svg__a"
      d="M14.25 18V4.125a2.625 2.625 0 015.156-.7l3.683 13.377"
    />,
    <path className="binocular_svg__a" d="M9.75 9h4.5v3h-4.5z" />
  );

export default SvgBinocular;
