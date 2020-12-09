import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWebsiteBuild = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".website-build_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="website-build_svg__a"
      d="M1.5 6.75H12M7.5 2.25v4.5M12 12.75V2.25H3a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-7.5zM12 5.25h10.5M12 9h10.5M15.75 2.25v10.5M20.25 2.25v10.5"
    />
  );

export default SvgWebsiteBuild;
