import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="composition-man_svg__a"
      d="M23.5 23.5a10.135 10.135 0 00-1-4.057c-.746-1.492-4-2.5-8-4v-3a3.75 3.75 0 001.5-3c.5 0 1-2 0-2.5 0-.3 1.339-2.8 1-4.5-.5-2.5-7.5-2.5-8-.5-3 0-1 4.594-1 5-1 .5-.5 2.5 0 2.5a3.75 3.75 0 001.5 3v3c-4 1.5-7.255 2.508-8 4a10.135 10.135 0 00-1 4.057z"
    />,
    <path
      className="composition-man_svg__a"
      d="M.5 11.5v2a1 1 0 001 1h2M23.5 11.5v2a1 1 0 01-1 1h-2M.5 3.5v-2a1 1 0 011-1h2M23.5 3.5v-2a1 1 0 00-1-1h-2"
    />
  );

export default SvgCompositionMan;
