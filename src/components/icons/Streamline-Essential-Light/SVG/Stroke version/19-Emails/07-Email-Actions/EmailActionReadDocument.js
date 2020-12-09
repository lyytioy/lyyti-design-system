import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionReadDocument = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-read-document_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-read-document_svg__a"
      d="M19.5 8.75l4 2.75V22a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 22V11.5l4-2.75"
    />,
    <path
      className="email-action-read-document_svg__a"
      d="M3.5 20.5l5-4h7l5 4M23.5 11.5l-6 4M.5 11.5l6 4M19.5 14V1.5a1 1 0 00-1-1h-13a1 1 0 00-1 1V14M7.5 3.5h2M9.5 6.5h7M7.5 9.5h9M7.5 12.5h9"
    />
  );

export default SvgEmailActionReadDocument;
