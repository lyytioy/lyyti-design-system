import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditMagicWand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-magic-wand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-magic-wand_svg__a"
      d="M15.75 12.5v-11a1 1 0 00-1-1h-13a1 1 0 00-1 1v18a1 1 0 001 1h9.5"
    />,
    <path
      className="video-edit-magic-wand_svg__a"
      d="M12.75.5v8h-9v-8M3.75 4.5h-3M3.75 8.5h-3M15.75 4.5h-3M15.75 8.5h-3M3.75 20.5v-8h9V17M3.75 12.5h-3M3.75 16.5h-3M15.75 12.5h-3M16.985 23.5l5.647-10.588a1 1 0 00-.412-1.353l-1.764-.941a1 1 0 00-1.353.412L12.452 23.5M20.75 16.441l-3.53-1.882M19.75 6.5v2M20.75 7.5h-2M21.75 1v3M23.25 2.5h-3"
    />
  );

export default SvgVideoEditMagicWand;
