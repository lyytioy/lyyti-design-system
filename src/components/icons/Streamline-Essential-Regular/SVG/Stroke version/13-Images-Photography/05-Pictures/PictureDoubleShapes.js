import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureDoubleShapes = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-double-shapes_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="picture-double-shapes_svg__a"
      d="M18.75 5.25v-.978a2.011 2.011 0 00-2-2.022h-14a2.011 2.011 0 00-2 2.022v9.456a2.011 2.011 0 002 2.022"
    />,
    <rect
      className="picture-double-shapes_svg__a"
      x={9}
      y={13.5}
      width={5.25}
      height={5.25}
      rx={1}
      ry={1}
    />,
    <path
      className="picture-double-shapes_svg__a"
      d="M16.75 18.75h2.625a.875.875 0 00.875-.875.857.857 0 00-.1-.4l-3.2-6.213a.717.717 0 00-1.275 0l-.251.486"
    />,
    <rect
      className="picture-double-shapes_svg__a"
      x={6}
      y={8.25}
      width={17.25}
      height={13.5}
      rx={1}
      ry={1}
    />
  );

export default SvgPictureDoubleShapes;
