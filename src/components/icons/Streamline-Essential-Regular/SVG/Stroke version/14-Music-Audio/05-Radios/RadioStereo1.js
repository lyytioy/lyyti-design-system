import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioStereo1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radio-stereo-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="radio-stereo-1_svg__a" d="M10.492 14.25h3" />,
    <circle
      className="radio-stereo-1_svg__a"
      cx={17.992}
      cy={17.25}
      r={2.25}
    />,
    <circle className="radio-stereo-1_svg__a" cx={5.992} cy={17.25} r={2.25} />,
    <path
      className="radio-stereo-1_svg__a"
      d="M7.492 11.25L8 8.706A1.5 1.5 0 019.472 7.5h5.04a1.5 1.5 0 011.471 1.206l.509 2.544M3.742 6.75a3 3 0 013-3M.742 6.75a6 6 0 016-6M20.242 6.75a3 3 0 00-3-3M23.242 6.75a6 6 0 00-6-6"
    />,
    <rect
      className="radio-stereo-1_svg__a"
      x={0.742}
      y={11.25}
      width={22.5}
      height={12}
      rx={4}
      ry={4}
    />,
    <path className="radio-stereo-1_svg__a" d="M8.242 23.25l1.5-3h4.5l1.5 3" />
  );

export default SvgRadioStereo1;
