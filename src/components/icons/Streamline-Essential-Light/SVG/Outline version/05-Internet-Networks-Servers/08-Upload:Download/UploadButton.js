import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24a.5.5 0 01-.5-.5V8.31l-3.11 3.887a.497.497 0 01-.702.078.5.5 0 01-.077-.703l4-5a.279.279 0 01.034-.035.497.497 0 01.355-.152.498.498 0 01.389.187l4.001 5.001a.501.501 0 01-.781.626L12.5 8.31V23.5a.5.5 0 01-.5.5z" />,
    <path d="M14.5 17a.5.5 0 010-1H19a.5.5 0 00.5-.5v-14A.5.5 0 0019 1H5a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h4.5a.5.5 0 010 1H5c-.827 0-1.5-.673-1.5-1.5v-14C3.5.673 4.173 0 5 0h14c.827 0 1.5.673 1.5 1.5v14c0 .827-.673 1.5-1.5 1.5h-4.5z" />
  );

export default SvgUploadButton;
