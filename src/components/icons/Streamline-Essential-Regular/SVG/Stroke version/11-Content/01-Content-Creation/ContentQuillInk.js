import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentQuillInk = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-quill-ink_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="content-quill-ink_svg__a"
      x={3.331}
      y={8.211}
      width={6}
      height={3}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="content-quill-ink_svg__a"
      d="M10.936 12.968l5.834-5.833M23.134.861c-8.328-.947-12.244 7.71-10.022 9.932S24.083 9.216 23.134.861zM7.831 14.414v-3.2h-3v3.253a5.608 5.608 0 00-4.044 5.369 5.5 5.5 0 00.641 2.574 1.5 1.5 0 001.328.8h7.312a1.5 1.5 0 001.328-.8 5.5 5.5 0 00.641-2.574 5.611 5.611 0 00-4.206-5.422zM.901 18.711h11.022"
    />
  );

export default SvgContentQuillInk;
