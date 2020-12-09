import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileQuill = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-quill_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-quill_svg__a"
      d="M10.68 23.5l7.409-7.409M16.232 13.019c-.83.1-5.45 4.493-2.535 7.407 1.019 1.019 3.294.859 6.036-1.882 2.1-2.105 3.3-5.719 3.747-7.285a.5.5 0 00-.576-.623 21.916 21.916 0 00-4.376 1.326s-.637 2.973-2.3 2.973z"
    />,
    <path
      className="common-file-quill_svg__a"
      d="M7.5 23.5h-6a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />
  );

export default SvgCommonFileQuill;
