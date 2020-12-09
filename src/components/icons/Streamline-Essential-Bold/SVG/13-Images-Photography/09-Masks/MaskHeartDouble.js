import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskHeartDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M24 2a2 2 0 00-2-2H2a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2zm-2 19.5a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-19a.5.5 0 01.5-.5h19a.5.5 0 01.5.5z" />,
    <path d="M6.515 11.029a.25.25 0 00.407-.067l.055-.113a4.657 4.657 0 016.648-1.86.25.25 0 00.266 0 4.7 4.7 0 011.908-.68.25.25 0 00.217-.213 3.159 3.159 0 00-5.363-2.67l-.2.2a.249.249 0 01-.353 0l-.2-.2a3.159 3.159 0 00-4.482 4.459z" />,
    <path d="M19.2 11.519a3.158 3.158 0 00-5.059-.821l-.2.2a.25.25 0 01-.353 0l-.2-.2a3.159 3.159 0 00-4.488 4.46l4.5 4.688a.5.5 0 00.723 0l4.486-4.68a3.156 3.156 0 00.591-3.647z" />
  );

export default SvgMaskHeartDouble;
