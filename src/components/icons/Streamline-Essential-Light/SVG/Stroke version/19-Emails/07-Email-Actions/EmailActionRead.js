import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionRead = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-read_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-read_svg__a"
      d="M23.5 20.954a1.5 1.5 0 01-1.5 1.5H2a1.5 1.5 0 01-1.5-1.5v-11l11.5-8.5 11.5 8.5z"
    />,
    <path
      className="email-action-read_svg__a"
      d="M3.5 18.954l5-3.5h7l5 3.5M23.5 9.954l-6 4M.5 9.954l6 4"
    />
  );

export default SvgEmailActionRead;
