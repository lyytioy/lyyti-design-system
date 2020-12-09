import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="earpods-check_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="earpods-check_svg__a"
      d="M20.174 15.755l-2.905 3.874a.751.751 0 01-1.13.081l-1.5-1.5M6 8.5A1.5 1.5 0 017.5 10M3.25 5.25A.25.25 0 113 5.5a.25.25 0 01.25-.25"
    />,
    <path
      className="earpods-check_svg__a"
      d="M10.5 12V5.5A5.268 5.268 0 005 .5 5.711 5.711 0 00.759 2.322a1 1 0 00-.259.671v5.014a1 1 0 00.259.671A5.711 5.711 0 005 10.5a5.9 5.9 0 002.5-.5v12.5a1 1 0 001 1h1a1 1 0 001-1v-1M18 8.5a1.5 1.5 0 00-1.433 1.054M20.75 5.25a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="earpods-check_svg__a"
      d="M20.819 10.219a5.542 5.542 0 002.422-1.541 1 1 0 00.259-.671V2.993a1 1 0 00-.259-.671A5.711 5.711 0 0019 .5a5.268 5.268 0 00-5.5 5v5"
    />
  );

export default SvgEarpodsCheck;
