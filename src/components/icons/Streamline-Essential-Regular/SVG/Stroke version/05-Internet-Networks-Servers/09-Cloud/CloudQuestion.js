import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cloud-question_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="cloud-question_svg__a"
      d="M15.375 16.125A1.875 1.875 0 1117.25 18M17.25 20.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M23.1 9.659a4.868 4.868 0 00-7.486-2.794A7.5 7.5 0 108.25 15.75"
    />
  );

export default SvgCloudQuestion;
