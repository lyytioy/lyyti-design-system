import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyFever = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-fever_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-fever_svg__a"
      d="M7.5 19a4.5 4.5 0 019 0M4.5 8a3.564 3.564 0 013-1.5M19.5 8a3.564 3.564 0 00-3-1.5M6.5 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 9.75a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="smiley-fever_svg__a"
      d="M16.132 17.222l6.959-5.1a1 1 0 10-1.182-1.614l-6.971 5.105M19.489 12.285l1.181 1.613M22.771 8a11.492 11.492 0 10.448 6.5"
    />
  );

export default SvgSmileyFever;
