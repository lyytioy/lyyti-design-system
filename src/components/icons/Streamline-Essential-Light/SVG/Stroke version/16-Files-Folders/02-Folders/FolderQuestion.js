import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-question_svg__a"
      d="M20.5 8.5v-4a1 1 0 00-1-1H9.618a1 1 0 01-.894-.553l-.948-1.894A1 1 0 006.882.5H1.5a1 1 0 00-1 1v15a1 1 0 001 1h7"
    />,
    <circle className="folder-question_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="folder-question_svg__a"
      d="M15.625 16.042a1.875 1.875 0 111.875 1.875v1M17.5 20.917a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgFolderQuestion;
