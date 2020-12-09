import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hash_svg__a"
      d="M3.75 8.248h19.5M.75 17.248h19.5M12 .748l-7.5 22.5M19.5.748l-7.5 22.5"
    />
  );

export default SvgHash;
