import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './htmapmonitor';

/**
 * Initialization data for the htmap_monitor extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'htmap-monitor',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension htmap-monitor is activated!');

    requestAPI<any>('get_example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The htmap_monitor server extension appears to be missing.\n${reason}`
        );
      });
  }
};

export default extension;
