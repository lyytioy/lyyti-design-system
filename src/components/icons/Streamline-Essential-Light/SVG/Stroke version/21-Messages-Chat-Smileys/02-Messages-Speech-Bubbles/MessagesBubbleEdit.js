import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-edit_svg__a"
      d="M15.7 22.3l-4.2 1.2 1.2-4.2 7.179-7.179a2.121 2.121 0 013 3zM18.979 13.022l3 3M12.7 19.301l3 3M21.468 9.511c.013-.169.032-.338.032-.51C21.5 4.306 16.8.5 11 .5S.5 4.306.5 9a7.74 7.74 0 003.018 5.96L1.5 19.5l5.637-2.6a12.637 12.637 0 003.863.6c.237 0 .468-.016.7-.029"
    />
  );

export default SvgMessagesBubbleEdit;
