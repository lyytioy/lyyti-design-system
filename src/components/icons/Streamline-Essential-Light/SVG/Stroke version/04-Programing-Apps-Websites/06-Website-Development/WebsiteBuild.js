import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWebsiteBuild = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".website-build_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="website-build_svg__a"
      d="M23 12a.5.5 0 01.5.5V20a2 2 0 01-2 2h-19a2 2 0 01-2-2V4a2 2 0 012-2H13a.5.5 0 01.5.5V11a1 1 0 001 1zM.5 7h13"
    />,
    <path
      className="website-build_svg__a"
      d="M4 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.5 8h10M13.5 4h10M21.5 2v10M17.5 2v10"
    />
  );

export default SvgWebsiteBuild;
