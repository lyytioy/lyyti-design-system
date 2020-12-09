import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlipVerticalUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flip-vertical-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flip-vertical-up_svg__a"
      d="M14 9.874l-.986-3.993-3.985.96M2.5 4.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M2.5 8.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M22.5 4.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M22.5 8.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M2.5.5a.25.25 0 10.25.25A.25.25 0 002.5.5M6.5.5a.25.25 0 10.25.25A.25.25 0 006.5.5M10.5.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M14.5.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M18.5.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M22.5.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M22.5 14.5v8a1 1 0 01-1 1h-18a1 1 0 01-1-1v-8M13.5 12.499h10M.5 12.499h7M13 5.881a10 10 0 00-.044 13.184"
    />
  );

export default SvgFlipVerticalUp;
