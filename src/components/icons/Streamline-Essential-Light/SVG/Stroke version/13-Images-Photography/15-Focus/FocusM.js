import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusM = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-m_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="focus-m_svg__a"
      d="M.5 5.5v-2a1 1 0 011-1h2M23.5 5.5v-2a1 1 0 00-1-1h-2M.5 18.5v2a1 1 0 001 1h2M23.5 18.5v2a1 1 0 01-1 1h-2M9.5 17.5V7l2.5 5 2.5-5v10.5"
    />
  );

export default SvgFocusM;
