import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileLight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-light_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="image-file-light_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293z"
    />,
    <path
      className="image-file-light_svg__a"
      d="M12.826 12.366l-2.8-3.74a.5.5 0 00-.84.063L5.91 14.763a.5.5 0 00.44.737h4.181"
    />,
    <circle className="image-file-light_svg__a" cx={14.5} cy={16} r={4} />
  );

export default SvgImageFileLight;
