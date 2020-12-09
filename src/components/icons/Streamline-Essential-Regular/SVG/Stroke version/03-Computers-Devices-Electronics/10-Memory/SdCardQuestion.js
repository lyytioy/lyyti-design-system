import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="sd-card-question_svg__a"
      d="M9.75 23.25h-7.5a1.5 1.5 0 01-1.5-1.5v-10.5h1.5v-3H.75v-6a1.5 1.5 0 011.5-1.5h10.56a1.5 1.5 0 011.139.524l4.44 4.305a1.5 1.5 0 01.361.976V7.5M6.75 3.75v3M11.25 3.75v3"
    />,
    <circle className="sd-card-question_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="sd-card-question_svg__a"
      d="M15.75 15.75a1.5 1.5 0 111.5 1.5V18M17.25 19.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgSdCardQuestion;
