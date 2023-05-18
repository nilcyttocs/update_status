import { createTheme, ThemeOptions } from '@mui/material/styles';

import { requestAPI } from './handler';

import webdsTheme from './mui_theme';

export interface OSInfo {
  current: {
    version: string;
    versionNum: number;
  };
  repo: {
    version: string;
    versionNum: number;
    tarballUrl: string;
    tarballName: string;
    manifestUrl: string;
    manifestName: string;
    downloaded: boolean;
  };
}

export type TouchcommADCReport = [
  string,
  {
    image: number[][];
    hybridx: number[];
    hybridy: number[];
    buttons?: number[];
  }
];

export type TouchcommPositionData = {
  objectIndex: number;
  classification: number;
  xMeas: number;
  yMeas: number;
  z: number;
  xWidth: number;
  yWidth: number;
};

export type TouchcommTouchReport = [
  string,
  {
    buttonState?: any[];
    pos?: TouchcommPositionData[];
  }
];

export type TouchcommTraceReport = { xTrace: number[][]; yTrace: number[][] };

export type WebDSService = any;

export const addStaticConfigUsage = async (
  configName: string,
  target: string
) => {};

export const isExternal = () => {
  return false;
};

export const isTestRailOnline = () => {
  return true;
};

export const getRenderRate = (): number | undefined => {
  return undefined;
};

export const setRenderRate = async (rate: number) => {};

const getIdentify = async (): Promise<any> => {
  const dataToSend: any = {
    command: 'identify'
  };
  try {
    const response = await requestAPI<any>('command', {
      body: JSON.stringify(dataToSend),
      method: 'POST'
    });
    return response;
  } catch (error) {
    console.error(`Error - POST /webds/command\n${dataToSend}\n${error}`);
    return Promise.reject('Failed to get Identify report');
  }
};

export const getPackratID = async (): Promise<number> => {
  try {
    const identify = await getIdentify();
    console.log('Packrat ID = ' + identify.buildID);
    return identify.buildID;
  } catch (error) {
    console.error(error);
    return Promise.reject('Failed to get Packrat ID');
  }
};

export const getPartNumber = async (): Promise<string> => {
  try {
    const identify = await getIdentify();
    let partNumber = identify.partNumber
      .toUpperCase()
      .replace(/\0/g, '')
      .replace(/ /g, '-');
    const pnParts = partNumber.split(':');
    if (pnParts.length === 2) {
      partNumber = pnParts[0] + '-';
      let utf8 = decodeURI(encodeURIComponent(pnParts[1]));
      for (let i = 0; i < utf8.length; i++) {
        if (i >= 2) {
          break;
        }
        if (i !== 0) {
          partNumber = partNumber + '.';
        }
        partNumber = partNumber + utf8.charCodeAt(i).toString();
      }
    }
    partNumber = partNumber.replace(/([A-Z])([A-Z])/g, '$1-$2');
    return partNumber;
  } catch (error) {
    console.error(error);
    return Promise.reject('Failed to get part number');
  }
};

export type ConfigEntry = {
  name: string;
  value: any;
};

export const readDynamicConfig = async (): Promise<any> => {
  const dataToSend = {
    command: 'getDynamicConfig'
  };
  try {
    const config = await requestAPI<any>('command', {
      body: JSON.stringify(dataToSend),
      method: 'POST'
    });
    return config;
  } catch (error) {
    console.error(`Error - POST /webds/command\n${dataToSend}\n${error}`);
    return Promise.reject('Failed to read dynamic config from device');
  }
};

export const writeDynamicConfig = async (entries: any) => {
  let config: any;
  try {
    config = await readDynamicConfig();
  } catch (error) {
    return Promise.reject(error);
  }
  Object.keys(entries).forEach(item => {
    if (!(item in config)) {
      return Promise.reject(`${item} config entry not found in dynamic config`);
    }
  });
  config = { ...config, ...entries };
  const dataToSend = {
    command: 'setDynamicConfig',
    payload: [config]
  };
  try {
    await requestAPI<any>('command', {
      body: JSON.stringify(dataToSend),
      method: 'POST'
    });
  } catch (error) {
    console.error(`Error - POST /webds/command\n${dataToSend}\n${error}`);
    return Promise.reject('Failed to write dynamic config to device');
  }
};

export const readStaticConfig = async (): Promise<any> => {
  const dataToSend = {
    command: 'getStaticConfig'
  };
  try {
    const config = await requestAPI<any>('command', {
      body: JSON.stringify(dataToSend),
      method: 'POST'
    });
    return config;
  } catch (error) {
    console.error(`Error - POST /webds/command\n${dataToSend}\n${error}`);
    return Promise.reject('Failed to read static config from device');
  }
};

export const writeStaticConfig = async (entries: any, commit: boolean) => {
  let config: any;
  try {
    config = await readStaticConfig();
  } catch (error) {
    return Promise.reject(error);
  }
  Object.keys(entries).forEach(item => {
    if (!(item in config)) {
      return Promise.reject(`${item} config entry not found in static config`);
    }
  });
  config = { ...config, ...entries };
  let dataToSend: any = {
    command: 'setStaticConfig',
    payload: [config]
  };
  try {
    await requestAPI<any>('command', {
      body: JSON.stringify(dataToSend),
      method: 'POST'
    });
  } catch (error) {
    console.error(`Error - POST /webds/command\n${dataToSend}\n${error}`);
    return Promise.reject('Failed to write static config to device');
  }
  if (commit) {
    dataToSend = {
      command: 'commitConfig'
    };
    try {
      await requestAPI<any>('command', {
        body: JSON.stringify(dataToSend),
        method: 'POST'
      });
    } catch (error) {
      console.error(`Error - POST /webds/command\n${dataToSend}\n${error}`);
      return Promise.reject('Failed to write config to flash');
    }
  }
};

export const getJupyterFontColor = (): string => {
  return 'rgba(0, 0, 0, 0.87)';
};

export const getWebDSTheme = ({ inverted = false } = {}): any => {
  if (inverted === true) {
    return createTheme(webdsTheme('dark') as ThemeOptions);
  } else {
    return createTheme(webdsTheme('light') as ThemeOptions);
  }
};

export const webdsService = {
  analytics: {
    addStaticConfigUsage
  },
  pinormos: {
    isExternal,
    isTestRailOnline,
    settings: {
      getRenderRate,
      setRenderRate
    }
  },
  touchcomm: {
    getPackratID,
    getPartNumber,
    readDynamicConfig,
    readStaticConfig,
    writeDynamicConfig,
    writeStaticConfig
  },
  ui: {
    getJupyterFontColor,
    getWebDSTheme
  }
};
