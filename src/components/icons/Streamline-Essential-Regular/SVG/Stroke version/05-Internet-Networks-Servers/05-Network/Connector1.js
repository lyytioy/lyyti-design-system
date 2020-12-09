import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConnector1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".connector-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="connector-1_svg__a"
      d="M20.25 12h3M.75 12h3M12 .75v3M12 20.25v3M18.75 9H15V5.25a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 009 5.25V9H5.25a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5H9v3.75a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5V15h3.75a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgConnector1;
