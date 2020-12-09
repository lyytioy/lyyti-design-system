import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlipVerticalDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flip-vertical-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flip-vertical-down_svg__a"
      d="M14 14.122l-.986 3.994-3.985-.961M2.5 19a.25.25 0 10.25.25.25.25 0 00-.25-.25M2.5 15a.25.25 0 10.25.25.25.25 0 00-.25-.25M22.5 19a.25.25 0 10.25.25.25.25 0 00-.25-.25M22.5 15a.25.25 0 10.25.25.25.25 0 00-.25-.25M2.5 23a.25.25 0 10.25.25.25.25 0 00-.25-.25M6.5 23a.25.25 0 10.25.25.25.25 0 00-.25-.25M10.5 23a.25.25 0 10.25.25.25.25 0 00-.25-.25M14.5 23a.25.25 0 10.25.25.25.25 0 00-.25-.25M18.5 23a.25.25 0 10.25.25.25.25 0 00-.25-.25M22.5 23a.25.25 0 10.25.25.25.25 0 00-.25-.25M22.5 9.5v-8a1 1 0 00-1-1h-18a1 1 0 00-1 1v8M13.5 11.499h10M.5 11.499h7M13 18.116a10 10 0 01-.044-13.185"
    />
  );

export default SvgFlipVerticalDown;
