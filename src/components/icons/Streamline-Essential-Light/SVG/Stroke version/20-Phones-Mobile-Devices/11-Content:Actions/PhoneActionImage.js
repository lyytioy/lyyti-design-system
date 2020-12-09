import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-image_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-image_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-image_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M7.5 16.5l1.95-2.651a1 1 0 011.274-.206l1.5 1.357 1.163-2.14a1 1 0 011.587.067L16.5 16.5z"
    />,
    <circle className="phone-action-image_svg__a" cx={9} cy={9} r={1.5} />
  );

export default SvgPhoneActionImage;
