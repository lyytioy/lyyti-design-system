import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgStampsImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".stamps-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="stamps-image_svg__a"
      d="M17.5 16.497L15.357 9.5 12 15l-2.062-1.745L8 16.497"
    />,
    <path className="stamps-image_svg__a" d="M4.5 4.5h15v15h-15z" />,
    <circle className="stamps-image_svg__a" cx={9} cy={9} r={2} />,
    <path
      className="stamps-image_svg__a"
      d="M23.5 2.8a2.31 2.31 0 00-4.6-.3 2.323 2.323 0 00-4.6 0 2.323 2.323 0 00-4.6 0 2.322 2.322 0 00-4.6 0 2.31 2.31 0 10-2.6 2.6 2.323 2.323 0 000 4.6 2.323 2.323 0 000 4.6 2.323 2.323 0 000 4.6 2.31 2.31 0 102.6 2.6 2.323 2.323 0 004.6 0 2.323 2.323 0 004.6 0 2.323 2.323 0 004.6 0 2.31 2.31 0 102.6-2.6 2.323 2.323 0 000-4.6 2.323 2.323 0 000-4.6 2.323 2.323 0 000-4.6 2.323 2.323 0 002-2.3z"
    />
  );

export default SvgStampsImage;
