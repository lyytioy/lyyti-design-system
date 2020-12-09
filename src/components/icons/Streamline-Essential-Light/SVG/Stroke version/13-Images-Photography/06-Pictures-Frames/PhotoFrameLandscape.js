import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhotoFrameLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".photo-frame-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="photo-frame-landscape_svg__a"
      d="M17.369.5a2 2 0 011.959 1.6l4.153 20.211A1 1 0 0122.5 23.5H6.631a2 2 0 01-1.959-1.6L.519 1.692A1 1 0 011.5.5zM3.027 13.9l-2.5 8.635a.771.771 0 00.746.967H2.5"
    />,
    <path
      className="photo-frame-landscape_svg__a"
      d="M16.991 3.99a.642.642 0 00-.6-.49H4.116a.392.392 0 00-.4.49l3.293 16.02a.642.642 0 00.6.49h12.275a.392.392 0 00.4-.49z"
    />,
    <path
      className="photo-frame-landscape_svg__a"
      d="M9.405 16.494H16.5l-2.258-5.483-1.934 3.547-1.29-1.289-1.613 3.225zM11.34 9.721a.968.968 0 11-.968-.966.968.968 0 01.968.966z"
    />
  );

export default SvgPhotoFrameLandscape;
