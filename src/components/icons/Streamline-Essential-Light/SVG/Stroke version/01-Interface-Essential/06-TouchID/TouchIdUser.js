import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchIdUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-user_svg__a"
      d="M14.5 23.5a4.5 4.5 0 019 0zM16.638 13.862a4.571 4.571 0 005.075 1.021"
    />,
    <circle className="touch-id-user_svg__a" cx={19} cy={15.25} r={2.75} />,
    <path
      className="touch-id-user_svg__a"
      d="M18.5 9.5a8.967 8.967 0 00-2.293-6M.5 11.5v3A9 9 0 006 22.794M14 1.706A9 9 0 00.514 9"
    />,
    <path
      className="touch-id-user_svg__a"
      d="M7 4.044A6 6 0 0115.5 9.5v1.426M13.972 18.5a6 6 0 01-10.472-4v-5a5.977 5.977 0 011.528-4"
    />,
    <path
      className="touch-id-user_svg__a"
      d="M6.5 14.5a3 3 0 006 0v-5a3 3 0 00-6 0v3M9.5 9.5v3M9.5 14.5v1M9.5 23.5a9.017 9.017 0 002.523-.358"
    />
  );

export default SvgTouchIdUser;
