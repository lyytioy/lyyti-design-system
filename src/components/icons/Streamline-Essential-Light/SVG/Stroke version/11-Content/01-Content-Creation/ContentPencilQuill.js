import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPencilQuill = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pencil-quill_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-pencil-quill_svg__a"
      d="M6.266 20.618L.5 23.5l2.884-5.766L20.02 1.1a2.039 2.039 0 112.88 2.88zM21.462 5.421l-2.884-2.883M6.266 20.618l-2.882-2.884M23.5 23.5L18 18M12.013 18.043c2.672 1.364 4.82 1.124 5.987-.043 1.135-1.135 1.478-3.483.312-6.262M12.325 5.59A22.79 22.79 0 0010.5 4.405V6.5s-1.395-.35-1.855-3.087A41.511 41.511 0 00.5.5s1.557 6.949 5.09 11.825"
    />
  );

export default SvgContentPencilQuill;
