import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgStampsMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".stamps-mail_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="stamps-mail_svg__a"
      d="M15 18.048A6.751 6.751 0 1118.75 12"
    />,
    <circle className="stamps-mail_svg__a" cx={12} cy={12} r={3} />,
    <path
      className="stamps-mail_svg__a"
      d="M15 12v1.125a1.875 1.875 0 003.75 0V12"
    />,
    <path
      className="stamps-mail_svg__a"
      d="M21 16.5a2.247 2.247 0 01.843-1.756 3.761 3.761 0 001.407-2.935 3 3 0 00-1.285-2.462 2.25 2.25 0 01.227-3.833A2 2 0 0023.25 3.75a3 3 0 00-3-3 2 2 0 00-1.764 1.058 2.25 2.25 0 01-3.742.349A3.761 3.761 0 0011.809.75a3 3 0 00-2.462 1.285 2.25 2.25 0 01-3.833-.227A2 2 0 003.75.75a3 3 0 00-3 3 2 2 0 001.058 1.764 2.25 2.25 0 01.349 3.742A3.761 3.761 0 00.75 12.191a3 3 0 001.285 2.462 2.25 2.25 0 01-.227 3.833A2 2 0 00.75 20.25a3 3 0 003 3 2 2 0 001.764-1.058 2.25 2.25 0 013.742-.349 3.761 3.761 0 002.935 1.407 3 3 0 002.462-1.285 2.25 2.25 0 013.833.227 2 2 0 001.764 1.058 3 3 0 003-3 2 2 0 00-1.058-1.764A2.249 2.249 0 0121 16.5z"
    />
  );

export default SvgStampsMail;
