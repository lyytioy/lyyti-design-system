import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyLiar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-liar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-liar_svg__a"
      d="M20.8 19.028a11.248 11.248 0 112.083-9.945M7.778 9a.375.375 0 01.375.375M7.4 9.375A.375.375 0 017.778 9M7.778 9.75a.375.375 0 01-.378-.375M8.153 9.375a.375.375 0 01-.375.375M16.51 9a.375.375 0 01.375.375M16.135 9.375A.375.375 0 0116.51 9M16.51 9.75a.375.375 0 01-.375-.375M16.885 9.375a.375.375 0 01-.375.375"
    />,
    <path
      className="smiley-liar_svg__a"
      d="M9.278 5.941a3.539 3.539 0 00-2.334.291A3.542 3.542 0 005.26 7.875M15.01 5.941a3.689 3.689 0 014.018 1.934M12.76 12.75h8.98a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5h-8.98M9.019 19.5a9.33 9.33 0 017.33 0"
    />
  );

export default SvgSmileyLiar;
