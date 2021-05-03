import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const EmptyFile = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M22.477 21.75a1.5 1.5 0 01-1.5 1.5H3.023a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.047.426l2.955 2.883a1.5 1.5 0 01.452 1.074z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default EmptyFile;
