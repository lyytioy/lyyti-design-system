import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapVerticalExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-vertical-expand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-vertical-expand_svg__a"
      d="M15.52.501v3M13.02 2.501l2.5-2 2.5 2M15.52 23.501v-3M13.02 21.501l2.5 2 2.5-2M11.575 6.488A6.5 6.5 0 1111.56 17.5"
    />,
    <path
      className="gesture-tap-vertical-expand_svg__a"
      d="M15.52 10.5a1 1 0 010 2h-4.755L9.6 16.421a1.282 1.282 0 01-1.52.894c-.569-.131-3.995-.744-4.576-.85v-6.12l4.591-3.06C9.947 6.07 10.591 9.12 7.5 10.5z"
    />
  );

export default SvgGestureTapVerticalExpand;
