import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioStereo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radio-stereo_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="radio-stereo_svg__a" cx={5.242} cy={15.75} r={4.5} />,
    <path
      className="radio-stereo_svg__a"
      d="M2.242 12.4V9.75a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5v2.65M5.242 20.25h13.5M5.242 8.25v-3a1.5 1.5 0 011.5-1.5h10.5a1.5 1.5 0 011.5 1.5v3"
    />,
    <circle className="radio-stereo_svg__a" cx={5.242} cy={15.75} r={1.5} />,
    <circle className="radio-stereo_svg__a" cx={18.742} cy={15.75} r={4.5} />,
    <circle className="radio-stereo_svg__a" cx={18.742} cy={15.75} r={1.5} />
  );

export default SvgRadioStereo;
