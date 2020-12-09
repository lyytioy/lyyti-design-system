import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlertTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alert-triangle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alert-triangle_svg__a"
      d="M22.553 22.581a.569.569 0 01-.553.894H2a.569.569 0 01-.553-.894L11.553 2.37c.246-.492.648-.492.894 0zM12 16.979v-7"
    />,
    <path
      className="alert-triangle_svg__a"
      d="M11.991 18.979a.246.246 0 00-.241.255.255.255 0 00.254.245h.005a.246.246 0 00.241-.255.255.255 0 00-.25-.245h-.005"
    />
  );

export default SvgAlertTriangle;
