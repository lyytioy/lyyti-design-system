import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardStar1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-star-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="award-star-1_svg__a"
      d="M12.707 1.184L14.37 4.5h2.83a.777.777 0 01.559 1.328L15.161 7.6l1.439 3.308a.785.785 0 01-1.118.982L12 9.93l-3.484 1.96a.786.786 0 01-1.116-.982L8.839 7.6l-2.6-1.769A.777.777 0 016.8 4.5h2.829l1.664-3.316a.793.793 0 011.414 0zM12 9.93V15M21 23.25a9.034 9.034 0 00-18 0z"
    />
  );

export default SvgAwardStar1;
