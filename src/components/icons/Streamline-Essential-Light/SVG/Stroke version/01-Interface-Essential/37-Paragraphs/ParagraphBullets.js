import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphBullets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-bullets_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="paragraph-bullets_svg__a"
      x={0.5}
      y={0.498}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="paragraph-bullets_svg__a"
      d="M13.5 6.498h7M10.5 10.498h10M10.5 14.498h10M10.5 18.498h7"
    />,
    <rect
      className="paragraph-bullets_svg__a"
      x={3.5}
      y={4.498}
      width={4}
      height={4}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="paragraph-bullets_svg__a"
      x={3.5}
      y={10.498}
      width={4}
      height={4}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="paragraph-bullets_svg__a"
      x={3.5}
      y={16.498}
      width={4}
      height={4}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgParagraphBullets;
