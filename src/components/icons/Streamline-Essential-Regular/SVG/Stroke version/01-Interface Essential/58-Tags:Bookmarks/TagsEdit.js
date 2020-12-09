import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tags-edit_svg__a"
      d="M6.879 19.188L1.5 13.81a1.5 1.5 0 010-2.122L12 1.188a1.5 1.5 0 011.061-.439h5.378a1.5 1.5 0 011.5 1.5v5.379M16.189 4.124"
    />,
    <path
      className="tags-edit_svg__a"
      d="M16.189 4.124a.375.375 0 10.375.375.375.375 0 00-.375-.375M22.32 14.868L14.689 22.5l-3.75.75.75-3.75 7.631-7.631a2.115 2.115 0 012.991 0l.009.009a2.115 2.115 0 010 2.99z"
    />
  );

export default SvgTagsEdit;
