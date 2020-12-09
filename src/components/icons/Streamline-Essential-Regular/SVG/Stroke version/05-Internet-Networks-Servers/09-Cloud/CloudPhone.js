import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudPhone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-phone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-phone_svg__a"
      d="M12 19.876a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <rect
      className="cloud-phone_svg__a"
      x={8.25}
      y={11.251}
      width={7.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="cloud-phone_svg__a"
      d="M18.734 15.738a4.875 4.875 0 10-3.124-8.873 7.5 7.5 0 10-10.386 8.25"
    />
  );

export default SvgCloudPhone;
