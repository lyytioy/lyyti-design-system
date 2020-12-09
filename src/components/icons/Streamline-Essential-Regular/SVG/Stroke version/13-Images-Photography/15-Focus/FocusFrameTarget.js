import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusFrameTarget = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-frame-target_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="focus-frame-target_svg__a" cx={12} cy={12} r={4.5} />,
    <path
      className="focus-frame-target_svg__a"
      d="M12 7.5V5.25M12 16.5v2.25M16.5 12h2.25M7.5 12H5.25M12 11.625a.375.375 0 11-.375.375.375.375 0 01.375-.375M.75 4.5V2.25a1.5 1.5 0 011.5-1.5H4.5M23.25 4.5V2.25a1.5 1.5 0 00-1.5-1.5H19.5M.75 19.5v2.25a1.5 1.5 0 001.5 1.5H4.5M23.25 19.5v2.25a1.5 1.5 0 01-1.5 1.5H19.5"
    />
  );

export default SvgFocusFrameTarget;
