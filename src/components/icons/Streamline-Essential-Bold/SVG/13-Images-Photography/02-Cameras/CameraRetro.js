import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraRetro = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M19 17.5a.5.5 0 010-1h4.75a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25H19a.5.5 0 010-1h4.75a.25.25 0 00.25-.25V7a1.5 1.5 0 00-1.5-1.5h-21A1.5 1.5 0 000 7v5.25a.25.25 0 00.25.25H5a.5.5 0 010 1H.25a.25.25 0 00-.25.25v2.5a.25.25 0 00.25.25H5a.5.5 0 010 1H.25a.25.25 0 00-.25.25V20a1.5 1.5 0 001.5 1.5h21A1.5 1.5 0 0024 20v-2.25a.25.25 0 00-.25-.25zM6.5 15a5.5 5.5 0 115.5 5.5A5.506 5.506 0 016.5 15zm14-4.75A1.25 1.25 0 1121.75 9a1.25 1.25 0 01-1.25 1.25zM3 9.5a1 1 0 010-2h3a1 1 0 010 2zM17 4.5h4a.5.5 0 00.5-.5A1.5 1.5 0 0020 2.5h-2A1.5 1.5 0 0016.5 4a.5.5 0 00.5.5z" />,
    <circle cx={12} cy={15} r={3.5} />
  );

export default SvgCameraRetro;
