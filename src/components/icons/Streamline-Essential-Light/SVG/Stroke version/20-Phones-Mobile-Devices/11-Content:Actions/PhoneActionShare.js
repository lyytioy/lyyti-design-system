import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-share_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-share_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-share_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3"
    />,
    <circle className="phone-action-share_svg__a" cx={9.5} cy={12} r={1.5} />,
    <circle className="phone-action-share_svg__a" cx={14.5} cy={14} r={1.5} />,
    <circle className="phone-action-share_svg__a" cx={14.5} cy={9} r={1.5} />,
    <path
      className="phone-action-share_svg__a"
      d="M10.783 11.23l2.433-1.46M10.892 12.557l2.216.886"
    />
  );

export default SvgPhoneActionShare;
