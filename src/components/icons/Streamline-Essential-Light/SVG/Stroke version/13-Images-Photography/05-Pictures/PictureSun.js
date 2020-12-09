import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureSun = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-sun_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="picture-sun_svg__a" cx={16.5} cy={7.5} r={2.5} />,
    <path
      className="picture-sun_svg__a"
      d="M16.5 3v-.5M13.318 4.318l-.354-.354M12 7.5h-.5M13.318 10.682l-.354.354M16.5 12v.5M19.682 10.682l.354.354M21 7.5h.5M19.682 4.318l.354-.354"
    />,
    <rect
      className="picture-sun_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="picture-sun_svg__a"
      d="M2.307 15.9a8.752 8.752 0 0113.6 3.681M14.548 17.241a4.751 4.751 0 016.987.639"
    />
  );

export default SvgPictureSun;
