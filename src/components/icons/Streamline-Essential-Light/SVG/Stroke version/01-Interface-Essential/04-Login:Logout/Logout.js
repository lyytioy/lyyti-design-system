import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLogout = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".logout_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="logout_svg__a"
      d="M1.414 16.5a11.5 11.5 0 100-9M12.5 16l4-4-4-4M16.5 12H.5"
    />
  );

export default SvgLogout;
