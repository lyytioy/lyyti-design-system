import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveCircleBold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove-circle-bold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="remove-circle-bold_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="remove-circle-bold_svg__a"
      d="M17.3 14.121L15.182 12 17.3 9.878a1.5 1.5 0 000-2.121L16.243 6.7a1.5 1.5 0 00-2.122 0L12 8.818 9.879 6.7a1.5 1.5 0 00-2.122 0L6.7 7.757a1.5 1.5 0 000 2.121L8.818 12 6.7 14.121a1.5 1.5 0 000 2.121L7.757 17.3a1.5 1.5 0 002.122 0L12 15.182l2.121 2.118a1.5 1.5 0 002.122 0l1.06-1.061a1.5 1.5 0 00-.003-2.118z"
    />
  );

export default SvgRemoveCircleBold;
