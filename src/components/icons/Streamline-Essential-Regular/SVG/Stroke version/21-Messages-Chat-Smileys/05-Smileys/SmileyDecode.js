import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyDecode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-decode_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-decode_svg__a"
      d="M18.75 18.75h3v3h-3zM9.75 21.75h-3M8.25 21.75v-3M12.75 21.75l1.5-3 1.5 3M.775 12.75a11.25 11.25 0 0122.45 0"
    />,
    <path
      className="smiley-decode_svg__a"
      d="M7.285 10.643a.375.375 0 11-.375.375.375.375 0 01.375-.375M17.25 10.643a.375.375 0 11-.375.375.375.375 0 01.375-.375M6 7.584a3.539 3.539 0 012.334.291 3.542 3.542 0 011.684 1.643M18.268 7.584a3.687 3.687 0 00-4.018 1.934M.75 15.75h22.5M.75 18.75l3 3M.75 21.75l3-3"
    />
  );

export default SvgSmileyDecode;
