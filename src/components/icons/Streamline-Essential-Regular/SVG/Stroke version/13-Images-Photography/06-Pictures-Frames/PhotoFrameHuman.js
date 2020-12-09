import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhotoFrameHuman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".photo-frame-human_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="photo-frame-human_svg__a"
      x={2.25}
      y={0.75}
      width={19.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="photo-frame-human_svg__a"
      d="M12.75 6A2.774 2.774 0 0115 4.5 2.774 2.774 0 0117.25 6 2.774 2.774 0 0115 7.5 2.774 2.774 0 0112.75 6zM12 20.25l2.25-4.5h-4.5l1.5-3H6L10.5 3M18 12l-1.5 1.5"
    />
  );

export default SvgPhotoFrameHuman;
