import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-question_svg__a"
      d="M8.25 18.75H2.447M20.25 8.25v-3a1.5 1.5 0 00-1.5-1.5H8.25v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v14.8a1.7 1.7 0 003.336.438l2.351-8.154A1.5 1.5 0 017.879 8.25H21.75a1.5 1.5 0 011.45 1.886"
    />,
    <path
      className="folder-question_svg__a"
      d="M11.323 16.3a6 6 0 104.977-4.977 6.006 6.006 0 00-4.977 4.977zM15.375 16.125A1.875 1.875 0 1117.25 18"
    />,
    <path
      className="folder-question_svg__a"
      d="M17.25 20.25a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgFolderQuestion;
