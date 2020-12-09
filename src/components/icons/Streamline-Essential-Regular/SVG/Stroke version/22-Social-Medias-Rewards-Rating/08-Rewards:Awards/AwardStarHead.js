import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardStarHead = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-star-head_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="award-star-head_svg__a"
      d="M12.616 1.13l1.456 2.62h2.479a.679.679 0 01.489 1.162L14.763 7.4l1.262 2.9a.687.687 0 01-.979.858L12 9.44l-3.052 1.714a.687.687 0 01-.979-.858L9.231 7.4 6.954 4.912a.68.68 0 01.489-1.162h2.48l1.456-2.62a.693.693 0 011.237 0zM13.5 19.5v3.75h3.75M16.5 15.75v3.75h3.75M19.5 12.75v3.75h3.75M19.5 16.5l3-3M10.5 19.5v3.75H6.75M7.5 15.75v3.75H3.75M4.5 12.75v3.75H.75M4.5 16.5l-3-3"
    />
  );

export default SvgAwardStarHead;
