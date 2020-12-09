import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="image-file-disable_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="image-file-disable_svg__a"
      d="M13.008 21.491l8.484-8.483M6.75 20.25h-4.5a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />,
    <path
      className="image-file-disable_svg__a"
      d="M5.25 5.625A.375.375 0 114.875 6a.375.375 0 01.375-.375M12.2 9.767l-.95-1.517a.749.749 0 00-1.238-.014l-2 2.851L6.78 10.1a.75.75 0 00-1.093.169L3.75 14.25h4.5"
    />
  );

export default SvgImageFileDisable;
