import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioDocumentAif = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-document-aif_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="audio-document-aif_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="audio-document-aif_svg__a"
      d="M6.5 15v-4.5a1.5 1.5 0 013 0V15M6.5 12h3M12.5 9v6M11.5 15h2M11.5 9h2M15.5 15v-5a1 1 0 011-1h2M15.5 12h2"
    />
  );

export default SvgAudioDocumentAif;
