import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScissors1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scissors-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="scissors-1_svg__a"
      d="M12 16.29C7.422 13.3 5.078 9.754 5.078 3.878A16.081 16.081 0 015.435.5l8.792 21.146"
    />,
    <circle className="scissors-1_svg__a" cx={17} cy={20.499} r={3} />,
    <path
      className="scissors-1_svg__a"
      d="M12 16.29c4.578-2.99 6.922-6.536 6.922-12.412A16.081 16.081 0 0018.565.5L9.773 21.646"
    />,
    <circle className="scissors-1_svg__a" cx={7} cy={20.499} r={3} />
  );

export default SvgScissors1;
