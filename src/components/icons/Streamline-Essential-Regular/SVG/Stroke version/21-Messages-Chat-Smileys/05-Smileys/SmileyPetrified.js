import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyPetrified = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-petrified_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-petrified_svg__a"
      d="M12 13.5c-.828 0-1.5.5-1.5 1.125v4.5c0 .621.672 1.125 1.5 1.125s1.5-.5 1.5-1.125v-4.5c0-.625-.672-1.125-1.5-1.125z"
    />,
    <path
      className="smiley-petrified_svg__a"
      d="M20.392 16.549c1.555-1.079 2.858-1.8 2.858-5.527C23.25 4.808 18.213.75 12 .75S.75 4.808.75 11.022c0 3.685 1.276 4.433 2.809 5.493M7.511 21.086A4.938 4.938 0 0012 23.25a4.947 4.947 0 004.519-2.2"
    />,
    <path
      className="smiley-petrified_svg__a"
      d="M.75 23.25s2.935-.978 2.935-4.891-1.468-4.4-.489-5.381 4.4 1.957 4.4 5.381a17.365 17.365 0 01-.489 4.891M23.25 23.25s-2.935-.978-2.935-4.891 1.468-4.4.489-5.381-4.4 1.957-4.4 5.381a17.365 17.365 0 00.489 4.891"
    />,
    <ellipse
      className="smiley-petrified_svg__a"
      cx={7.125}
      cy={9}
      rx={1.875}
      ry={2.25}
    />,
    <ellipse
      className="smiley-petrified_svg__a"
      cx={16.875}
      cy={9}
      rx={1.875}
      ry={2.25}
    />
  );

export default SvgSmileyPetrified;
