import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgListBullets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".list-bullets_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="list-bullets_svg__a" cx={2.5} cy={4.498} r={2} />,
    <path className="list-bullets_svg__a" d="M8.5 4.498h15" />,
    <circle className="list-bullets_svg__a" cx={2.5} cy={12.498} r={2} />,
    <path className="list-bullets_svg__a" d="M8.5 12.498h15" />,
    <circle className="list-bullets_svg__a" cx={2.5} cy={20.498} r={2} />,
    <path className="list-bullets_svg__a" d="M8.5 20.498h15" />
  );

export default SvgListBullets;
