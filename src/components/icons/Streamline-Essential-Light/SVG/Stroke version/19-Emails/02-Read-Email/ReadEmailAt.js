import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailAt = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".read-email-at_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="read-email-at_svg__a" cx={12} cy={12} r={4.5} />,
    <path
      className="read-email-at_svg__a"
      d="M18.5 21.5a11.509 11.509 0 115-9.5v1a3.5 3.5 0 01-7 0v-1"
    />
  );

export default SvgReadEmailAt;
