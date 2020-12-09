import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiWebpageCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-webpage-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="ui-webpage-check_svg__a"
      d="M3.75 19.5H2.571a1.038 1.038 0 01-1.071-1V1.725A1.027 1.027 0 012.571.75h18.858a1.027 1.027 0 011.071.975V18.5a1.038 1.038 0 01-1.071 1H20.25M5.25 4.5h13.5M5.217 8.25H15"
    />,
    <circle
      className="ui-webpage-check_svg__a"
      cx={12}
      cy={17.625}
      r={5.625}
    />,
    <path
      className="ui-webpage-check_svg__a"
      d="M14.259 16.134l-2.438 3.251a.631.631 0 01-.949.068l-1.261-1.261"
    />
  );

export default SvgUiWebpageCheck;
