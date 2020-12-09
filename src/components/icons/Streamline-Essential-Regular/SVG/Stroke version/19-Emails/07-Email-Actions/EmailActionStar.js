import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-star_svg__a"
      d="M17.947 11.68L19.488 15h3a.735.735 0 01.518 1.283l-2.6 2.563 1.442 3.313a.786.786 0 01-1.119.982l-3.489-1.958-3.487 1.961a.786.786 0 01-1.119-.982l1.443-3.313-2.6-2.563A.734.734 0 0111.988 15h3l1.544-3.323a.8.8 0 011.415.003z"
    />,
    <path
      className="email-action-star_svg__a"
      d="M7.5 15.75H2.25a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 011.5 1.5v7.5"
    />,
    <path
      className="email-action-star_svg__a"
      d="M21.411 1.3l-8.144 6.264a3.308 3.308 0 01-4.034 0L1.089 1.3"
    />
  );

export default SvgEmailActionStar;
