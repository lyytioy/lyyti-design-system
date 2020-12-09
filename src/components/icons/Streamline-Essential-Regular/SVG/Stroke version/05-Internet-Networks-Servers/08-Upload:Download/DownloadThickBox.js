import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadThickBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-thick-box_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="download-thick-box_svg__a"
      d="M12.001 10.5v9M15.001 16.5l-3 3-3-3"
    />,
    <rect
      className="download-thick-box_svg__a"
      x={0.751}
      y={6.75}
      width={22.5}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="download-thick-box_svg__a"
      d="M.954 7.5l2.4-5.859A1.5 1.5 0 014.726.75h14.55a1.5 1.5 0 011.371.891l2.344 5.765M12.001 6.75v-6"
    />
  );

export default SvgDownloadThickBox;
