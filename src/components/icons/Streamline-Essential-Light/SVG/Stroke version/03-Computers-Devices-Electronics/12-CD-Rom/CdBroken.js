import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdBroken = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-broken_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cd-broken_svg__a"
      d="M14.4 9.4a3.5 3.5 0 11-4.848 5.049M14.375.7l-2.949 4.748h3.663l-7.782 8.7 3.14-6.7H6.723L10.968.5a11.484 11.484 0 103.407.2z"
    />
  );

export default SvgCdBroken;
