import React from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import { CANVAS_ATTRS } from './constants';

export const Controls = ({ sx, ...controlsProps }: BoxProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: CANVAS_ATTRS.MIN_HEIGHT_CONTROLS + 'px',
        padding: CANVAS_ATTRS.PADDING + 'px',
        boxSizing: 'border-box',
        position: 'relative',
        ...sx
      }}
      {...controlsProps}
    >
      {controlsProps.children}
    </Box>
  );
};
