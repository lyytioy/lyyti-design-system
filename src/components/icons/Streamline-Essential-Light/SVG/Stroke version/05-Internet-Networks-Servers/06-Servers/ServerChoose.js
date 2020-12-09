import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerChoose = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-choose_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="server-choose_svg__a"
      d="M8.25 11.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M10.75 11.75A.25.25 0 1011 12a.25.25 0 00-.25-.25"
    />,
    <path
      className="server-choose_svg__a"
      d="M19.5 12A2.5 2.5 0 0017 9.5H7a2.5 2.5 0 000 5h10a2.5 2.5 0 002.5-2.5zM8.25 16.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M10.75 16.75A.25.25 0 1011 17a.25.25 0 00-.25-.25"
    />,
    <path
      className="server-choose_svg__a"
      d="M19.5 17a2.5 2.5 0 00-2.5-2.5H7a2.5 2.5 0 000 5h10a2.5 2.5 0 002.5-2.5zM8.25 6.75A.25.25 0 108.5 7a.25.25 0 00-.25-.25M10.75 6.75A.25.25 0 1011 7a.25.25 0 00-.25-.25"
    />,
    <path
      className="server-choose_svg__a"
      d="M19.5 7A2.5 2.5 0 0017 4.5H7a2.5 2.5 0 000 5h10A2.5 2.5 0 0019.5 7zM21.5 18a2 2 0 000-4 2 2 0 000-4 2 2 0 000-4M2.5 18a2 2 0 010-4 2 2 0 010-4 2 2 0 010-4"
    />
  );

export default SvgServerChoose;
