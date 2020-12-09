import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrokenTabRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".broken-tab-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="broken-tab-remove_svg__a"
      d="M12.719 16.33a.477.477 0 01-.05.455.5.5 0 01-.414.215H1.751a.988.988 0 01-1-.975v-7.8a.988.988 0 011-.975h10.505a.507.507 0 01.415.213.477.477 0 01.05.455l-1.654 4.041a.476.476 0 000 .363zM16.5 17a.488.488 0 01-.452-.306l-1.755-4.372a.49.49 0 010-.363l1.755-4.4a.487.487 0 01.452-.309h5.775a.975.975 0 01.975.975v7.8a.976.976 0 01-.975.975zM18 10.657l2.935 2.935M20.935 10.657L18 13.592"
    />
  );

export default SvgBrokenTabRemove;
