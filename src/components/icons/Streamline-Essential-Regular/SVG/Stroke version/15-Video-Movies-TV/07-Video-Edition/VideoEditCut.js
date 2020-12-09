import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditCut = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-cut_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="video-edit-cut_svg__a" cx={3.013} cy={8.25} r={2.25} />,
    <circle
      className="video-edit-cut_svg__a"
      cx={3.013}
      cy={16.446}
      r={2.25}
    />,
    <path
      className="video-edit-cut_svg__a"
      d="M2.34 10.397l7.391 4.381 4.201 2.489M2.34 14.299l4.317-2.558M9.737 12V2.25a1.5 1.5 0 011.5-1.5h12M23.237 23.25h-12a1.5 1.5 0 01-1.5-1.5V18M14.237 9.75v-9M14.237 23.25v-3M9.737 5.25h4.5M23.237 14.25V.75M23.237 23.25v-9M9.737 9.75h13.5M15.737 14.25h7.5"
    />
  );

export default SvgVideoEditCut;
