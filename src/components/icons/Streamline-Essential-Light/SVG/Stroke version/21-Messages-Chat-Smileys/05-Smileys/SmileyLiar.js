import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyLiar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-liar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-liar_svg__a"
      d="M4.5 8a3.564 3.564 0 013-1.5M19.5 8a3.564 3.564 0 00-3-1.5M6.5 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 9.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M16.134 19.22a4.5 4.5 0 00-8.268 0 .739.739 0 001.01.953A6.446 6.446 0 0112 19.5a6.446 6.446 0 013.124.673.739.739 0 001.01-.953zM23.4 10.5a11.5 11.5 0 10-.817 6"
    />,
    <path className="smiley-liar_svg__a" d="M12.5 14.5h10a1 1 0 000-2h-10" />
  );

export default SvgSmileyLiar;
