import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditSplit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-split_svg__a,.video-edit-split_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}.video-edit-split_svg__b{stroke-dasharray:1.5 2}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-split_svg__a"
      d="M15 11.25l8.25.009M18.759 6.75l-.009 4.5M15 18.75l8.19.009M18.75 23.25v-4.5M15.009 6.75L15 23.25h6.75a1.493 1.493 0 001.5-1.491v-13.5a1.5 1.5 0 00-1.491-1.509h-6.75M8.983 11.25H.75M5.259 6.75l-.009 4.5M9 18.75H.767M5.25 23.228V18.75M9 6.75v16.5H2.241a1.493 1.493 0 01-1.491-1.5V8.25a1.5 1.5 0 011.509-1.491L9 6.75"
    />,
    <path
      className="video-edit-split_svg__b"
      d="M12 23.25l.004-.75M11.996 19.517l.004-.75M11.996 15.767l.004-.75M11.979 12.017l.004-.75M12 8.267l.004-.75"
    />,
    <path
      className="video-edit-split_svg__a"
      d="M9 .75l3.022 3.767L15 .75H9z"
    />
  );

export default SvgVideoEditSplit;
