import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M14.848 6.062a2.479 2.479 0 10-2.48-2.479 2.482 2.482 0 002.48 2.479zM.75 9.052H4a.73.73 0 00.728-.614v-.017A.743.743 0 004 7.552H.75a.75.75 0 000 1.5z" />,
    <rect x={0.003} y={9.78} width={4.958} height={6.943} rx={0.5} ry={0.5} />,
    <path d="M5.7 8.8a1.236 1.236 0 001.237 1.237h4.7a.25.25 0 01.25.25V21.5a1.237 1.237 0 102.474 0v-5.673a.495.495 0 01.989 0V21.5a1.237 1.237 0 102.474 0V10.283a.25.25 0 01.25-.25h.03a5.162 5.162 0 004.4-2.441l1.312-2.1a1.237 1.237 0 00-2.1-1.311l-1.316 2.1a2.707 2.707 0 01-2.3 1.279H6.932A1.236 1.236 0 005.7 8.8z" />
  );

export default SvgSignalFlag;
