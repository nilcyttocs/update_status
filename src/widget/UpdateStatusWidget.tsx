import '../styles.css';

import React from 'react';

import UpdateStatusComponent from './UpdateStatusComponent';

export class UpdateStatusWidget extends React.Component {
  render(): JSX.Element {
    return (
      <div id="webds_sandbox_widget_content" className="jp-webds-widget">
        <div className="jp-webds-widget-outer-pseudo">
          <div className="jp-webds-widget-inner-pseudo">
            <UpdateStatusComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateStatusWidget;
