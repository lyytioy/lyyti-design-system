import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhotoFrameHang = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".photo-frame-hang_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="photo-frame-hang_svg__a"
      d="M7 5.5l5.5-5 5.5 5M.5 5.5h23v18H.5zM6.239 18.5h5.522"
    />,
    <path className="photo-frame-hang_svg__a" d="M2.5 7.5h19v14h-19z" />,
    <path
      className="photo-frame-hang_svg__a"
      d="M13.844 21.5S9 15.713 9 10.213C9 15.713 4.156 21.5 4.156 21.5M16.5 21.5V18a.5.5 0 01.5-.5h1.5v4M18.5 17.5V15a.5.5 0 01.5-.5h2.5"
    />
  );

export default SvgPhotoFrameHang;
