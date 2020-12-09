import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlertCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alert-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alert-circle_svg__a"
      d="M23 11.811A11.162 11.162 0 0112 23 10.837 10.837 0 011 12.192 11.162 11.162 0 0112 1a10.838 10.838 0 0111 10.811zM12 14.005v-7"
    />,
    <path
      className="alert-circle_svg__a"
      d="M11.991 16.005a.245.245 0 00-.241.255.254.254 0 00.253.245.246.246 0 00.241-.255.253.253 0 00-.244-.245h-.005"
    />
  );

export default SvgAlertCircle;
