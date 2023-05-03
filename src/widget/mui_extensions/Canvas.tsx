import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper, { PaperProps } from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CANVAS_ATTRS } from './constants';

interface CanvasProps extends PaperProps {
  title: string;
  width?: number | null;
  minWidth?: number | null;
  stretch?: boolean;
  showHelp?: boolean;
  annotation?: string | JSX.Element | null;
}

export const Canvas = ({
  title,
  width = null,
  minWidth = null,
  stretch = false,
  showHelp = false,
  annotation = null,
  sx,
  ...canvasProps
}: CanvasProps) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={7}
      sx={{
        width: stretch
          ? '100%'
          : minWidth !== null
          ? null
          : (width ? width : CANVAS_ATTRS.WIDTH) + 'px',
        minWidth: minWidth ? minWidth + 'px' : 'auto',
        borderStyle: 'solid',
        borderWidth: theme.palette.mode === 'light' ? '0px' : '1px',
        borderColor: 'canvas.border',
        borderRadius: '10px',
        ...sx
      }}
      {...canvasProps}
    >
      <Stack spacing={0} divider={<Divider orientation="horizontal" />}>
        <Box
          sx={{
            width: stretch ? (minWidth ? minWidth + 'px' : '100%') : '100%',
            height: CANVAS_ATTRS.HEIGHT_TITLE + 'px',
            padding: CANVAS_ATTRS.PADDING + 'px',
            boxSizing: 'border-box',
            position: 'relative'
          }}
        >
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontWeight: 'bold'
            }}
          >
            {title}
          </Typography>
          {showHelp && (
            <Button
              variant="text"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '16px',
                transform: 'translate(0%, -50%)'
              }}
            >
              <Typography variant="underline">Help</Typography>
            </Button>
          )}
          {annotation && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: '16px',
                transform: 'translate(0%, -50%)'
              }}
            >
              {typeof annotation === 'string' ? (
                <Typography variant="body2">{annotation}</Typography>
              ) : (
                annotation
              )}
            </div>
          )}
        </Box>
        {canvasProps.children}
      </Stack>
    </Paper>
  );
};
