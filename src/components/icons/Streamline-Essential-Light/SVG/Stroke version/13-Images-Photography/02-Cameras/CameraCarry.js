import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraCarry = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-carry_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-carry_svg__a"
      d="M16.118 10.5a1 1 0 01-.894-.553l-.671-1.341A2 2 0 0012.764 7.5h-2.528a2 2 0 00-1.789 1.106l-.671 1.341a1 1 0 01-.894.553H1.5a1 1 0 00-1 1v11a1 1 0 001 1h21a1 1 0 001-1v-11a1 1 0 00-1-1zM10.5 9.5h2"
    />,
    <path
      className="camera-carry_svg__a"
      d="M2.5 10.5L11.207.852a1.068 1.068 0 011.585 0L21.5 10.5"
    />,
    <circle className="camera-carry_svg__a" cx={5} cy={15} r={1.5} />,
    <circle className="camera-carry_svg__a" cx={16} cy={17} r={4.5} />,
    <circle className="camera-carry_svg__a" cx={16} cy={17} r={2.5} />
  );

export default SvgCameraCarry;
