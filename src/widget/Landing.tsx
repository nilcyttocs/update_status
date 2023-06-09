import React, { useEffect, useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

import { requestAPI } from './local_exports';
import { Canvas } from './mui_extensions/Canvas';
import { Content } from './mui_extensions/Content';

let timeoutID: number | undefined = undefined;

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const Landing = (props: any): JSX.Element | null => {
  const [progress, setProgress] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [reboot, setReboot] = useState<boolean>(false);

  useEffect(() => {
    const checkProgress = async () => {
      try {
        const response = await requestAPI<any>('progress');
        setProgress(response);
        if (response === 90) {
          try {
            await sleep(2000);
            await fetch('http://localhost:80/');
          } catch (error) {
            throw error;
          }
          await sleep(25000);
          setProgress(100);
          await sleep(7000);
          setCompleted(true);
          await sleep(5000);
          window.location.reload();
          return;
        }
      } catch (error) {
        console.error(`Error - GET /progress\n${error}`);
        setProgress(100);
        await sleep(7000);
        setReboot(true);
        setCompleted(true);
        return;
      }
      timeoutID = window.setTimeout(checkProgress, 500);
    };
    checkProgress();
    return () => {
      if (timeoutID !== undefined) {
        clearTimeout(timeoutID);
      }
    };
  }, []);

  return progress === 0 ? null : (
    <Canvas title="DSDK Update">
      <Content
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {completed ? (
          reboot ? (
            <>
              <Typography variant="h4" sx={{ whiteSpace: 'normal' }}>
                Rebooting DSDK...
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: '16px', whiteSpace: 'normal', color: 'red' }}
              >
                Please re-establish ADB port forwarding and then reload the
                webpage.
              </Typography>
            </>
          ) : (
            <Typography variant="h4" sx={{ whiteSpace: 'normal' }}>
              Launching WebDS...
            </Typography>
          )
        ) : (
          <div style={{ padding: '0px 80px' }}>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: 'normal',
                color: 'red'
              }}
            >
              The update process may take several minutes to complete. Please do
              not unplug the DSDK during the update process.
            </Typography>
            <div
              style={{
                marginTop: '16px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ width: '100%', height: '8px', marginRight: '16px' }}
              />
              <CircularProgress size={20} />
            </div>
          </div>
        )}
      </Content>
    </Canvas>
  );
};

export default Landing;
