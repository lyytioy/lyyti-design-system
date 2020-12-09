import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsSplit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-split_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-split_svg__a"
      d="M7.491 10.013a2 2 0 000-2.829L5.37 5.062a2 2 0 00-2.829 0L1.378 6.226A3 3 0 001 10a46.5 46.5 0 0013 13 3 3 0 003.773-.379l1.164-1.163a2 2 0 000-2.828l-2.121-2.122a2 2 0 00-2.829 0l-.706.707a47.418 47.418 0 01-6.5-6.5zM11.5 4.501v-4h4"
    />,
    <path
      className="phone-actions-split_svg__a"
      d="M11.5.501l6 5.5v6.473M23.5 4.501v-4h-4M23.5.501l-4.185 3.816"
    />
  );

export default SvgPhoneActionsSplit;
