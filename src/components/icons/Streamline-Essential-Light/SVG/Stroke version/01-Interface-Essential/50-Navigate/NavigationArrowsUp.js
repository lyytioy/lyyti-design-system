import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationArrowsUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-arrows-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-arrows-up_svg__a"
      d="M16.4 16.5h5.307a.5.5 0 00.336-.87L12.336 6.8a.5.5 0 00-.672 0l-9.707 8.828a.5.5 0 00.336.87H7.6"
    />,
    <path
      className="navigation-arrows-up_svg__a"
      d="M1.958 21.628a.5.5 0 00.336.87h19.413a.5.5 0 00.336-.87L12.336 12.8a.5.5 0 00-.672 0zM16.4 10.5h5.307a.5.5 0 00.336-.87L12.336.8a.5.5 0 00-.672 0L1.957 9.628a.5.5 0 00.336.87H7.6"
    />
  );

export default SvgNavigationArrowsUp;
