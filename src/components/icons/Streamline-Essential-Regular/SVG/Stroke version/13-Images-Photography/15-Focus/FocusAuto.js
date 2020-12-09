import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusAuto = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-auto_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="focus-auto_svg__a"
      d="M20.25 15.418l2.357-2.357a1.5 1.5 0 000-2.121L20.25 8.583V5.25a1.5 1.5 0 00-1.5-1.5h-3.333l-2.356-2.357a1.5 1.5 0 00-2.122 0L8.583 3.75H5.25a1.5 1.5 0 00-1.5 1.5v3.333L1.393 10.94a1.5 1.5 0 000 2.121l2.357 2.357v3.332a1.5 1.5 0 001.5 1.5h3.333l2.356 2.357a1.5 1.5 0 002.122 0l2.356-2.357h3.333a1.5 1.5 0 001.5-1.5z"
    />,
    <path
      className="focus-auto_svg__a"
      d="M9.75 17.25v-9a2.25 2.25 0 014.5 0v9M9.75 12.75h4.5"
    />
  );

export default SvgFocusAuto;
