import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="image-file-sync_svg__a"
      cx={6.577}
      cy={7.5}
      rx={2.026}
      ry={2}
    />,
    <path
      className="image-file-sync_svg__a"
      d="M12.7 11.17l-.628-.992a.51.51 0 00-.859 0L8.54 14.4l-1.09-1.722a.51.51 0 00-.859 0L3.539 17.5H8.5"
    />,
    <path
      className="image-file-sync_svg__a"
      d="M8.391 23.5H1.513a1.006 1.006 0 01-1.013-1v-21a1.006 1.006 0 011.013-1h13.219a1.015 1.015 0 01.716.293L19.2 4.5a1 1 0 01.3.707V9.5"
    />,
    <path
      className="image-file-sync_svg__a"
      d="M15 18.5h-3.5V22M22.917 19.733A5.572 5.572 0 0112.1 18.5M20 16.5h3.5V13M12.083 15.267A5.572 5.572 0 0122.9 16.5"
    />
  );

export default SvgImageFileSync;
