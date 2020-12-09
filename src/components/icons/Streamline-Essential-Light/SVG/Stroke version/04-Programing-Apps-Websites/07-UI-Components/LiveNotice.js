import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLiveNotice = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".live-notice_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="live-notice_svg__a"
      x={1}
      y={5}
      width={22}
      height={14}
      rx={2}
      ry={2}
    />,
    <path
      className="live-notice_svg__a"
      d="M10 14.517v-5M12 9.517v1.7a5.959 5.959 0 001 3.3 5.959 5.959 0 001-3.3v-1.7M6 9.517v4a1 1 0 001 1h1M18 14.5h-1a1 1 0 01-1-1v-3a1 1 0 011-1h1M16 12.5h2"
    />
  );

export default SvgLiveNotice;
