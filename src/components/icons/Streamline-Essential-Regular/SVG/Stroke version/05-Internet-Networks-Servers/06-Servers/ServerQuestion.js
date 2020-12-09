import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-question_svg__a"
      d="M5.251 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.251 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-question_svg__a"
      d="M12.751 9.75h-7.5a4.5 4.5 0 010-9h12a4.5 4.5 0 012.458 8.27M8.251 18.75h-3a4.5 4.5 0 010-9M10.501 5.25h6.75"
    />,
    <circle className="server-question_svg__a" cx={17.251} cy={17.25} r={6} />,
    <path
      className="server-question_svg__a"
      d="M15.376 16.125A1.875 1.875 0 1117.251 18M17.251 20.25a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgServerQuestion;
