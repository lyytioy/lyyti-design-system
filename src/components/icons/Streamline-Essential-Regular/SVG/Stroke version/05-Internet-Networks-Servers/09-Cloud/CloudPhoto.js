import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudPhoto = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-photo_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cloud-photo_svg__a" cx={16.5} cy={17.25} r={3} />,
    <path
      className="cloud-photo_svg__a"
      d="M21.75 12.75H19.5l-.466-1.864a1.5 1.5 0 00-1.455-1.136h-2.158a1.5 1.5 0 00-1.455 1.136L13.5 12.75h-2.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5zM17.057 6.75a3.374 3.374 0 00-5.812-.988A5.25 5.25 0 106 11.25h1.5"
    />
  );

export default SvgCloudPhoto;
