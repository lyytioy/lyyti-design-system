import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsTap1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-tap-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="earpods-tap-1_svg__a" cx={17} cy={5.5} r={3} />,
    <path
      className="earpods-tap-1_svg__a"
      d="M9.5 8.5A1.5 1.5 0 0111 10M12.952 2.564A5.678 5.678 0 008.5.5a5.711 5.711 0 00-4.241 1.822A1 1 0 004 2.993v5.014a1 1 0 00.259.671A5.711 5.711 0 008.5 10.5 5.9 5.9 0 0011 10v12.5a1 1 0 001 1h1a1 1 0 001-1v-13"
    />,
    <path
      className="earpods-tap-1_svg__a"
      d="M6.75 5.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgEarpodsTap1;
