import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditPeel = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-peel_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-peel_svg__a"
      d="M19.5 3.75h2.772a.978.978 0 01.978.978v17.544a.978.978 0 01-.978.978H1.728a.978.978 0 01-.978-.978V4.728a.978.978 0 01.978-.978H14.25"
    />,
    <path
      className="video-edit-peel_svg__a"
      d="M15.825 23.25a3.556 3.556 0 003.675-3.424 3.556 3.556 0 00-3.675-3.426H14.25V.75h1.575A3.556 3.556 0 0119.5 4.174v15.652M10.5 18h-6M6.75 20.25L4.5 18l2.25-2.25M4.5 9h6M8.25 6.75L10.5 9l-2.25 2.25"
    />
  );

export default SvgVideoEditPeel;
