import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-remove_svg__a"
      d="M9.423 18.529L2.2 11.09a5.669 5.669 0 01-1.089-6.607A5.839 5.839 0 0110.4 3L12 4.455 13.6 3a5.84 5.84 0 019.287 1.487 5.655 5.655 0 01.192 4.7"
    />,
    <circle className="love-it-remove_svg__a" cx={17.5} cy={16.182} r={6} />,
    <path
      className="love-it-remove_svg__a"
      d="M19.621 14.061l-4.242 4.242M19.621 18.303l-4.242-4.242"
    />
  );

export default SvgLoveItRemove;
