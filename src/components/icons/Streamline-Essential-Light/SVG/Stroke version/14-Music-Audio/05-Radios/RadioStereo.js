import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioStereo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radio-stereo_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="radio-stereo_svg__a" cx={4.5} cy={18} r={4} />,
    <circle className="radio-stereo_svg__a" cx={19.5} cy={18} r={4} />,
    <path
      className="radio-stereo_svg__a"
      d="M10.5 17h3M2.5 14.535V13.25c0-.687.9-1.25 2-1.25h15c1.1 0 2 .563 2 1.25v1.285M19.5 22h-15M4.5 12V9a1 1 0 011-1h13a1 1 0 011 1v3"
    />,
    <circle className="radio-stereo_svg__a" cx={19.5} cy={18} r={1} />,
    <circle className="radio-stereo_svg__a" cx={4.5} cy={18} r={1} />,
    <path
      className="radio-stereo_svg__a"
      d="M14 14h-4l-2-2h8l-2 2zM10.75 18.991a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.25 18.991a.25.25 0 11-.25.25.25.25 0 01.25-.25M2.5 6a2 2 0 012-2M.5 6a4 4 0 014-4M21.5 6a2 2 0 00-2-2M23.5 6a4 4 0 00-4-4"
    />
  );

export default SvgRadioStereo;
