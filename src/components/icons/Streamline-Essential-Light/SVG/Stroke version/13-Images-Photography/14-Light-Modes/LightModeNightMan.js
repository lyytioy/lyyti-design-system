import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeNightMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-night-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-night-man_svg__a"
      d="M.5 23.414c.423-2.286.353-3.58 1.609-4.118L6.5 17.414v-2s-.945-.349-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.151-.866 2.5-.866 2.5v2l4.391 1.886c1.253.537 1.184 1.819 1.609 4.118zM19.436.6a.5.5 0 00-.559.741 5.524 5.524 0 01-3.754 8.222.5.5 0 00-.193.908A5.5 5.5 0 1019.436.6z"
    />
  );

export default SvgLightModeNightMan;
