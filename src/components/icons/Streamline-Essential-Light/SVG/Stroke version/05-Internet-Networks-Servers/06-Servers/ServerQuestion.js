import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="server-question_svg__a"
      d="M21.5 4.5a2 2 0 01-2 2h-17a2 2 0 01-2-2v-2a2 2 0 012-2h17a2 2 0 012 2zM2.5 12.5a2 2 0 01-2-2v-2a2 2 0 012-2h17a2 2 0 012 2V10"
    />,
    <path
      className="server-question_svg__a"
      d="M4.75 3.25A.25.25 0 105 3.5a.25.25 0 00-.25-.25M8.5 3.5a.25.25 0 00-.25-.25.25.25 0 10.25.25M4.75 9.25A.25.25 0 105 9.5a.25.25 0 00-.25-.25M8.25 9.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M9 18.5H2.5a2 2 0 01-2-2v-2a2 2 0 012-2h8"
    />,
    <path
      className="server-question_svg__a"
      d="M4.75 15.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M8.25 15.25a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <circle className="server-question_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="server-question_svg__a"
      d="M15.625 16.042a1.875 1.875 0 111.875 1.875v1M17.5 20.917a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgServerQuestion;
