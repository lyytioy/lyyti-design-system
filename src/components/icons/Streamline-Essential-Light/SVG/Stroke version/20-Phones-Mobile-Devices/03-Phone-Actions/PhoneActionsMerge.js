import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsMerge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-merge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-merge_svg__a"
      d="M7.492 10.014a2 2 0 000-2.829L5.37 5.064a2 2 0 00-2.828 0L1.378 6.227A3 3 0 001 10a46.483 46.483 0 0013 13 3 3 0 003.774-.378l1.164-1.164a2 2 0 000-2.828l-2.122-2.12a2 2 0 00-2.828 0l-.707.707a47.474 47.474 0 01-6.5-6.5zM16.5 3.5l3-3 3 3"
    />,
    <path
      className="phone-actions-merge_svg__a"
      d="M19.5.5v7.479L15.5 12M21.023 9.49L23.5 12"
    />
  );

export default SvgPhoneActionsMerge;
