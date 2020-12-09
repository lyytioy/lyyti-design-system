import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="image-file-home_svg__a" cx={6.5} cy={7.5} r={2} />,
    <path
      className="image-file-home_svg__a"
      d="M13.5 12.7l-1.574-2.519a.5.5 0 00-.848 0L8.438 14.4l-1.076-1.722a.5.5 0 00-.848 0L3.5 17.5h4"
    />,
    <path
      className="image-file-home_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V10.5"
    />,
    <path
      className="image-file-home_svg__a"
      d="M12.5 16.308V22.5a1 1 0 001 1h7a1 1 0 001-1v-6.192"
    />,
    <path
      className="image-file-home_svg__a"
      d="M10.5 18l5.854-4.953a1 1 0 011.292 0L23.5 18M18.5 23.5h-3v-3a1.5 1.5 0 013 0z"
    />
  );

export default SvgImageFileHome;
