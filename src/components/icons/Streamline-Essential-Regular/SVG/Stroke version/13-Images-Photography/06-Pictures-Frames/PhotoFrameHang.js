import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhotoFrameHang = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".photo-frame-hang_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="photo-frame-hang_svg__a"
      x={0.75}
      y={5.25}
      width={22.5}
      height={18}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="photo-frame-hang_svg__a"
      d="M6 5.25L11.529.9a.8.8 0 01.942 0L18 5.25M3.75 20.25h16.5M7.5 14.25h9M9.632 20.25c0-1.657 1.06-3 2.368-3s2.368 1.343 2.368 3"
    />,
    <path
      className="photo-frame-hang_svg__a"
      d="M6 18a33.794 33.794 0 006-12 33.794 33.794 0 006 12"
    />
  );

export default SvgPhotoFrameHang;
