import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
const PauseContained = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      fill="currentColor"
      d="M12 1C5.928 1 1 5.928 1 12s4.928 11 11 11 11-4.928 11-11S18.072 1 12 1ZM9.8 16.4c-.605 0-1.1-.495-1.1-1.1V8.7c0-.605.495-1.1 1.1-1.1.605 0 1.1.495 1.1 1.1v6.6c0 .605-.495 1.1-1.1 1.1Zm4.4 0c-.605 0-1.1-.495-1.1-1.1V8.7c0-.605.495-1.1 1.1-1.1.605 0 1.1.495 1.1 1.1v6.6c0 .605-.495 1.1-1.1 1.1Z"
    />
  );
export default PauseContained;
