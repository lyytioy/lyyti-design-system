import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioDocumentMid = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-document-mid_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="audio-document-mid_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="audio-document-mid_svg__a"
      d="M6.5 15V9L8 12l1.5-3v6M12.5 9v6M11.5 15h2M11.5 9h2M15.5 9a3 3 0 010 6z"
    />
  );

export default SvgAudioDocumentMid;
