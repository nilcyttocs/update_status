export const CANVAS_ATTRS = {
  WIDTH: 800,
  HEIGHT_TITLE: 70,
  MIN_HEIGHT_CONTENT: 450,
  MIN_HEIGHT_CONTROLS: 120,
  PADDING: 24
};

export interface ContentAttrs {
  PANEL_WIDTH: number;
  PANEL_SPACING: number;
}

export const getContentAttrs = (
  canvasWidth = CANVAS_ATTRS.WIDTH
): ContentAttrs => {
  const panelSpacing = 2;
  const panelWidth =
    (canvasWidth - CANVAS_ATTRS.PADDING * 2 - panelSpacing * 8 * 2) / 2;
  return {
    PANEL_WIDTH: panelWidth,
    PANEL_SPACING: panelSpacing
  };
};

export const STEPPER_ATTRS = {
  ICON_SIZE: 32,
  CONNECTOR_MIN_HEIGHT: 20
};

export const CAROUSEL_ATTRS = {
  STEPS: 3
};
