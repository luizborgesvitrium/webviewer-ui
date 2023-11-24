import { isAndroid, isChrome } from 'helpers/device';
import { defaultNoteDateFormat, defaultPrintedNoteDateFormat } from 'constants/defaultTimeFormat';
import { panelMinWidth, RESIZE_BAR_WIDTH } from 'constants/panel';
import { PLACEMENT, POSITION, ITEM_TYPE } from 'constants/customizationVariables';
import DataElements from 'constants/dataElement';

// viewer
export const getDefaultPrintMargins = (state) => state.viewer.defaultPrintMargins;
export const getColors = (state) => state.viewer.colors;
export const getCustomElementSize = (state, dataElement) => state.viewer.customElementSizes?.[dataElement] || 0;
export const getActiveFlyout = (state) => state.viewer.activeFlyout;
export const getFlyoutPosition = (state) => state.viewer.flyoutPosition;
export const getFlyoutMap = (state) => state.viewer.flyoutMap;
export const getFlyout = (state, dataElement) => state.viewer.flyoutMap[dataElement];
export const getFlyoutToggleElement = (state) => state.viewer.flyoutToggleElement;
export const getInitialsOffset = (state) => state.viewer.initalsOffset;
export const isSavedSignaturesTabEnabled = (state) => state.viewer.savedSignatureTabEnabled;
export const getSyncViewer = (state) => state.viewer.syncViewer;
export const isCompareStarted = (state) => state.viewer.isCompareStarted;
export const isComparisonDisabled = (state) => state.advanced.disableMultiViewerComparison;
export const getIsComparisonOverlayEnabled = (state) => state.viewer.isComparisonOverlayEnabled;
export const getActiveDocumentViewerKey = (state) => (state.viewer.isMultiViewerMode && state.viewer.activeDocumentViewerKey ? state.viewer.activeDocumentViewerKey : 1);
export const isMultiViewerMode = (state) => state.viewer.isMultiViewerMode;
export const isMultiViewerReady = (state) => state.viewer.isMultiViewerReady;
export const getCustomFlxPanels = (state, location) => {
  if (location) {
    return state.viewer.customFlxPanels.filter((item) => item.location === location);
  }
  return state.viewer.customFlxPanels;
};
export const shouldShowApplyCropWarning = (state) => state.viewer.shouldShowApplyCropWarning;
export const shouldShowApplySnippingWarning = (state) => state.viewer.shouldShowApplySnippingWarning;
export const getPresetCropDimensions = (state) => state.viewer.presetCropDimensions;
export const getPresetNewPageDimensions = (state) => state.viewer.presetNewPageDimensions;
export const getDateTimeFormats = (state) => state.viewer.dateTimeFormats;
export const getThumbnailSelectionMode = (state) => state.viewer.thumbnailSelectionMode;
export const getFonts = (state) => state.viewer.fonts;
export const getTabs = (state) => state.viewer.tabs;
export const getActiveTab = (state) => state.viewer.activeTab;
export const getIsMultiTab = (state) => state.viewer.isMultiTab;
export const getTabManager = (state) => state.viewer.TabManager;
export const getIsHighContrastMode = (state) => state.viewer.highContrastMode;
export const getLastPickedToolForGroup = (state, group) => state.viewer.lastPickedToolForGroup[group];
export const getStandardStamps = (state) => state.viewer.standardStamps;
export const getCustomStamps = (state) => state.viewer.customStamps;
export const getSelectedStampIndex = (state) => state.viewer.selectedStampIndex;
export const getSelectedStamp = (state) => {
  const standardStamps = getStandardStamps(state);
  const customStamps = getCustomStamps(state);
  const index = getSelectedStampIndex(state);
  let selectedStamp = standardStamps[index];
  // selected stamp is not found in standard stamps, search dynamic stamps
  if (!selectedStamp && !!customStamps.length) {
    selectedStamp = customStamps[index - standardStamps.length];
  }
  return selectedStamp;
};
export const getSavedSignatures = (state) => state.viewer.savedSignatures;
export const getDisplayedSignatures = (state) => state.viewer.savedSignatures.filter(state.viewer.displayedSignaturesFilterFunction);
export const getSelectedDisplayedSignatureIndex = (state) => state.viewer.selectedDisplayedSignatureIndex;
export const getSelectedDisplayedSignature = (state) => getDisplayedSignatures(state)[getSelectedDisplayedSignatureIndex(state)];
export const getDisplayedSignaturesFilterFunction = (state) => state.viewer.displayedSignaturesFilterFunction;
export const getSignatureMode = (state) => state.viewer.signatureMode;
export const getSavedInitials = (state) => state.viewer.savedInitials;
export const getSelectedDisplayedInitialsIndex = (state) => state.viewer.selectedDisplayedInitialsIndex;
export const getIsInitialsModeEnabled = (state) => state.viewer.isInitialsModeEnabled;
export const getDisplayedInitial = (state) => state.viewer.savedInitials[state.viewer.selectedDisplayedInitialsIndex];

export const getAutoFocusNoteOnAnnotationSelection = (state) => state.viewer.autoFocusNoteOnAnnotationSelection;
export const getNotesInLeftPanel = (state) => state.viewer.notesInLeftPanel;
export const getLeftPanelWidth = (state) => state.viewer.panelWidths.leftPanel;
export const getSearchPanelWidth = (state) => state.viewer.panelWidths.searchPanel;
export const getNotesPanelWidth = (state) => state.viewer.panelWidths.notesPanel;

export const getDeleteScaleInfo = (state) => state.viewer.deleteScale;

export const getRedactionPanelWidth = (state) => state.viewer.panelWidths.redactionPanel;

export const getWv3dPropertiesPanelWidth = (state) => state.viewer.panelWidths.wv3dPropertiesPanel;

export const getComparePanelWidth = (state) => state.viewer.panelWidths.comparePanel;

export const getTextEditingPanelWidth = (state) => state.viewer.panelWidths.textEditingPanel;

export const getWatermarkPanelWidth = (state) => state.viewer.panelWidths.watermarkPanel;

export const getLeftPanelWidthWithResizeBar = (state) => state.viewer.panelWidths.leftPanel + RESIZE_BAR_WIDTH;
export const getSearchPanelWidthWithResizeBar = (state) => state.viewer.panelWidths.searchPanel + RESIZE_BAR_WIDTH;
export const getNotesPanelWidthWithResizeBar = (state) => state.viewer.panelWidths.notesPanel + RESIZE_BAR_WIDTH;
export const getComparePanelWidthWithResizeBar = (state) => state.viewer.panelWidths.comparePanel + RESIZE_BAR_WIDTH;
export const getDocumentContentContainerWidthStyle = (state) => {
  const notesPanelWidth = getNotesPanelWidthWithResizeBar(state);
  const searchPanelWidth = getSearchPanelWidthWithResizeBar(state);
  const leftPanelWidth = getLeftPanelWidthWithResizeBar(state);
  const watermarkPanelWidth = getWatermarkPanelWidth(state);
  const textEditingPanelWidth = getTextEditingPanelWidth(state);
  const wv3dPropertiesPanelWidth = getWv3dPropertiesPanelWidth(state);
  const comparePanelWidth = getComparePanelWidthWithResizeBar(state);
  const redactionPanelWidth = getRedactionPanelWidth(state);
  const notesInLeftPanel = getNotesInLeftPanel(state);

  const isLeftPanelOpen = isElementOpen(state, 'leftPanel');
  const isNotesPanelOpen = isElementOpen(state, 'notesPanel');
  const isSearchPanelOpen = isElementOpen(state, 'searchPanel');
  const isRedactionPanelOpen = isElementOpen(state, 'redactionPanel');
  const isTextEditingPanelOpen = isElementOpen(state, 'textEditingPanel');
  const isWv3dPropertiesPanelOpen = isElementOpen(state, 'wv3dPropertiesPanel');
  const isComparePanelOpen = isElementOpen(state, 'comparePanel');
  const isWatermarkPanelOpen = isElementOpen(state, 'watermarkPanel');

  const flxPanelOnLeft = isCustomFlxPanelOpen(state, 'left');
  const flxPanelOnRight = isCustomFlxPanelOpen(state, 'right');

  const spaceTakenUpByPanels =
    0 +
    (isLeftPanelOpen ? leftPanelWidth : 0) +
    (isNotesPanelOpen && !notesInLeftPanel ? notesPanelWidth : 0) +
    (isSearchPanelOpen ? searchPanelWidth : 0) +
    (isRedactionPanelOpen ? redactionPanelWidth : 0) +
    (isTextEditingPanelOpen ? textEditingPanelWidth : 0) +
    (isWv3dPropertiesPanelOpen ? wv3dPropertiesPanelWidth : 0) +
    (isComparePanelOpen ? comparePanelWidth : 0) +
    (isWatermarkPanelOpen ? watermarkPanelWidth : 0) +
    (flxPanelOnLeft ? getPanelWidth(state, flxPanelOnLeft) : 0) +
    (flxPanelOnRight ? getPanelWidth(state, flxPanelOnRight) : 0);


  // Do not count headers without items
  const activeRightHeaderWidth = getActiveRightHeaderWidth(state);
  const activeLeftHeaderWidth = getActiveLeftHeaderWidth(state);
  const spaceTakenUpByHeaders = activeLeftHeaderWidth + activeRightHeaderWidth;
  return `calc(100% - ${spaceTakenUpByPanels + spaceTakenUpByHeaders}px)`;
};

export const isCustomFlxPanelOpen = (state, location) => {
  let customFlxPanels = state.viewer.customFlxPanels;

  if (location) {
    customFlxPanels = state.viewer.customFlxPanels.filter((item) => item.location === location);
  }

  return customFlxPanels
    .map((item) => item.dataElement)
    .find((elName) => isElementOpen(state, elName) === true);
};

export const getDocumentContainerLeftMargin = (state) => {
  const flxPanelOpenOnLeft = isCustomFlxPanelOpen(state, 'left');
  return 0 +
    (isElementOpen(state, 'leftPanel') ? getLeftPanelWidthWithResizeBar(state) : 0) +
    (flxPanelOpenOnLeft ? getPanelWidth(state, flxPanelOpenOnLeft) : 0);
};

export const getCalibrationInfo = (state) => state.viewer.calibrationInfo;
export const getIsAddingNewScale = (state) => state.viewer.isAddingNewScale;

export const getMeasurementScalePreset = (state) => state.viewer.measurementScalePreset;
export const getIsMultipleScalesMode = (state) => state.viewer.isMultipleScalesMode;
export const getIsNotesPanelMultiSelectEnabled = (state) => state.viewer.isNotesPanelMultiSelectEnabled;

export const getDocumentContainerWidth = (state) => state.viewer.documentContainerWidth;
export const getDocumentContainerHeight = (state) => state.viewer.documentContainerHeight;

export const isElementDisabled = (state, dataElement) => state.viewer?.disabledElements[dataElement]?.disabled;

export const isElementOpen = (state, dataElement) => !!(state.viewer?.openElements[dataElement] && !state.viewer?.disabledElements[dataElement]?.disabled);

export const isElementHidden = (state, dataElement) => state.viewer?.hiddenElements[dataElement];

export const allButtonsInGroupDisabled = (state, toolGroup) => {
  const toolButtonObjects = getToolButtonObjects(state);
  const dataElements = Object.values(toolButtonObjects)
    .filter(({ group }) => group === toolGroup)
    .map(({ dataElement }) => dataElement);

  return dataElements.every((dataElement) => isElementDisabled(state, dataElement));
};

export const getToolbarHeaders = (state) => state.viewer.headers;

export const getSelectedScale = (state) => state.viewer.selectedScale;

export const getCustomHeadersAdditionalProperties = (state) => {
  return state.viewer.customHeadersAdditionalProperties;
};

const getToolbarGroupDataElements = (state) => {
  return Object.keys(state.viewer.headers).filter((key) => key.includes('toolbarGroup-'));
};

export const getEnabledToolbarGroups = (state) => {
  const toolbarGroupDataElements = getToolbarGroupDataElements(state);
  return toolbarGroupDataElements.filter((dataElement) => {
    // The items will come from 'children' if it is a ToolbarGroup created by the API createTool
    const headerItems = state.viewer.headers[dataElement];
    const flattenHeaderItems = (dataItems) => {
      return dataItems.reduce((total, item) => {
        if (item.children) {
          total.push(...flattenHeaderItems(item.children));
        } else {
          total.push(item);
        }
        return total;
      }, []);
    };

    const itemsToCheck = flattenHeaderItems(headerItems);
    const toolGroupButtons = itemsToCheck.filter(({ dataElement }) => {
      return dataElement && dataElement.includes('ToolGroupButton');
    });
    const isEveryToolGroupButtonDisabled =
      !dataElement.includes('toolbarGroup-View') &&
      toolGroupButtons.every(({ dataElement: toolGroupDataElement }) => {
        return isElementDisabled(state, toolGroupDataElement);
      });
    return !isElementDisabled(state, `${dataElement}`) && !isEveryToolGroupButtonDisabled;
  });
};

export const getCurrentToolbarGroup = (state) => state.viewer.toolbarGroup;

export const getCurrentGroupedItems = (state) => state.viewer.activeGroupedItems;

export const getFixedGroupedItems = (state) => state.viewer.fixedGroupedItems;

export const getActiveHeaders = (state) => {
  return state.viewer.modularHeaders?.filter((header) => {
    return header.items?.length && header.items.filter((item) => {
      const itemProps = item.props || item;
      const hasActiveGroupedItems = state.viewer.activeGroupedItems?.length;
      const hasFixedGroupedItems = state.viewer.fixedGroupedItems?.length;
      if (itemProps.type === ITEM_TYPE.GROUPED_ITEMS && (hasActiveGroupedItems || hasFixedGroupedItems)) {
        return state.viewer.activeGroupedItems.includes(itemProps.dataElement) ||
          state.viewer.fixedGroupedItems.includes(itemProps.dataElement);
      }
      return true;
    });
  });
};

export const getActiveTheme = (state) => state.viewer.activeTheme;

export const getTimezone = (state) => state.viewer.timezone;

export const getDefaultHeaderItems = (state) => {
  return state.viewer.headers.default;
};

export const getModularHeaderList = (state) => state.viewer.modularHeaders;

export const getModularHeader = (state, dataElement) => {
  return state.viewer.modularHeaders.find((header) => header.dataElement === dataElement);
};

export const getBottomHeaders = (state) => {
  return state.viewer.modularHeaders.filter((header) => header.placement === PLACEMENT.BOTTOM);
};

export const getBottomHeadersHeight = (state) => {
  // Floating headers are excluded from the bottom headers height calculation
  // this is because they have no bearing on the height of the panels, as the float besides them
  const bottomHeaders = getBottomHeaders(state)
    .filter((header) => !header.float);

  const sum = bottomHeaders.reduce((accumulator, current) => {
    if (current.getDimensionTotal) {
      return accumulator + current.getDimensionTotal();
    }
    return 0;
  }, 0);

  return sum + (bottomHeaders.length * state.viewer.modularHeadersHeight.bottomHeaders);
};

export const getTopHeaders = (state) => {
  return state.viewer.modularHeaders.filter((header) => header.placement === PLACEMENT.TOP);
};

export const getRightHeader = (state) => {
  return state.viewer.modularHeaders.filter((header) => header.placement === PLACEMENT.RIGHT);
};

export const getLeftHeader = (state) => {
  return state.viewer.modularHeaders.filter((header) => header.placement === PLACEMENT.LEFT);
};

export const getTopHeadersHeight = (state) => {
  const topHeaders = getTopHeaders(state);
  // Dont inclued hidden ones. Refactor this.
  const topHeadersQuantity = topHeaders.reduce((accumulator, currentHeader) => {
    const { autoHide } = currentHeader;
    if (autoHide && !autoHide) {
      return accumulator + 1;
    }
    if (currentHeader.items && !currentHeader.items.length) {
      return accumulator;
    }

    const { float } = currentHeader;
    if (float) {
      // Floating headers are excluded from the headers height calculation
      // this is because they have no bearing on the height of the panels, as the float besides them
      return accumulator;
    }

    return accumulator + 1;
  }, 0);
  return topHeadersQuantity * state.viewer.modularHeadersHeight.topHeaders;
};


export const getRightHeaderWidth = (state) => state.viewer.modularHeadersWidth.rightHeader;

export const getLeftHeaderWidth = (state) => state.viewer.modularHeadersWidth.leftHeader;

export const getActiveLeftHeaderWidth = (state) => {
  const activeHeaders = getActiveHeaders(state);
  const isLeftHeaderActive = activeHeaders?.some((header) => header.placement === PLACEMENT.LEFT);
  return isLeftHeaderActive ? getLeftHeaderWidth(state) : 0;
};

export const getActiveRightHeaderWidth = (state) => {
  const activeHeaders = getActiveHeaders(state);
  const isRightHeaderActive = activeHeaders?.some((header) => header.placement === PLACEMENT.RIGHT);
  return isRightHeaderActive ? getRightHeaderWidth(state) : 0;
};

export const getTopFloatingContainerHeight = (state) => state.viewer.floatingContainersDimensions.topFloatingContainerHeight;

export const getBottomFloatingContainerHeight = (state) => state.viewer.floatingContainersDimensions.bottomFloatingContainerHeight;

export const getTopStartFloatingHeaders = (state) => {
  return getTopHeaders(state).filter((header) => header.position === POSITION.START && header.float);
};

export const getBottomStartFloatingHeaders = (state) => {
  return getBottomHeaders(state).filter((header) => header.position === POSITION.START && header.float);
};

export const getTopEndFloatingHeaders = (state) => {
  return state.viewer.modularHeaders.filter((header) => header.placement === PLACEMENT.TOP && header.position === POSITION.END && header.float);
};

export const getBottomEndFloatingHeaders = (state) => {
  return state.viewer.modularHeaders.filter((header) => header.placement === PLACEMENT.BOTTOM && header.position === POSITION.END && header.float);
};

export const getActiveHeaderItems = (state) => {
  return state.viewer.headers[state.viewer.activeHeaderGroup];
};

export const getDisabledElementPriority = (state, dataElement) => state.viewer.disabledElements[dataElement]?.priority;

export const getToolsHeaderItems = (state) => {
  const toolbarGroup = getCurrentToolbarGroup(state);
  return state.viewer.headers[toolbarGroup] || [];
};

export const getToolbarGroupItems = (toolbarGroup) => (state) => {
  return state.viewer.headers[toolbarGroup];
};

export const getToolButtonObjects = (state) => {
  return state.viewer.toolButtonObjects;
};

export const isToolGroupReorderingEnabled = (state) => {
  return state.viewer.enableToolGroupReordering;
};

export const isNoteSubmissionWithEnterEnabled = (state) => {
  return state.viewer.enableNoteSubmissionWithEnter;
};

export const isNotesPanelTextCollapsingEnabled = (state) => {
  return state.viewer.isNotesPanelTextCollapsingEnabled;
};

export const isNotesPanelRepliesCollapsingEnabled = (state) => {
  return state.viewer.isNotesPanelRepliesCollapsingEnabled;
};

export const isCommentThreadExpansionEnabled = (state) => {
  return state.viewer.isCommentThreadExpansionEnabled;
};

export const getActiveToolNamesForActiveToolGroup = (state) => {
  const { activeToolGroup } = state.viewer;
  const toolButtonObjects = getToolButtonObjects(state);
  return Object.keys(toolButtonObjects).filter((toolName) => {
    const toolButtonObject = toolButtonObjects[toolName];
    const { group, dataElement } = toolButtonObject;
    return group === activeToolGroup && !isElementDisabled(state, dataElement);
  });
};

export const getToolButtonDataElements = (state, toolNames) => {
  const toolButtonObjects = getToolButtonObjects(state);
  return toolNames.map((toolName) => toolButtonObjects[toolName]?.dataElement).filter(Boolean);
};

export const getToolButtonObject = (state, toolName) => getToolButtonObjects(state)[toolName];

export const getToolButtonDataElement = (state, toolName) => getToolButtonObject(state, toolName)?.dataElement;

export const getToolNamesByGroup = (state, toolGroup) => {
  const toolButtonObjects = getToolButtonObjects(state);
  return Object.keys(toolButtonObjects).filter((name) => toolButtonObjects[name].group === toolGroup);
};

export const getToolNameByDataElement = (state, dataElement) => {
  const toolButtonObjects = getToolButtonObjects(state);
  return Object.keys(toolButtonObjects).find((name) => toolButtonObjects[name].dataElement === dataElement);
};

export const getActiveToolName = (state) => state.viewer.activeToolName;

export const getActiveToolStyles = (state) => state.viewer.activeToolStyles;

export const getCustomColor = (state) => state.viewer.customColor;

export const getCustomColors = (state) => state.viewer.customColors;

export const getActiveLeftPanel = (state) => state.viewer.activeLeftPanel;

export const getActiveToolGroup = (state) => state.viewer.activeToolGroup;

export const getNotePopupId = (state) => state.viewer.notePopupId;

export const getFitMode = (state) => state.viewer.fitMode;

export const getZoom = (state, documentViewerKey = 1) => state.viewer.zoomLevels[documentViewerKey];

export const getDisplayMode = (state) => state.viewer.displayMode;

export const getCurrentPage = (state) => state.viewer.currentPage;

export const getSortStrategy = (state) => state.viewer.sortStrategy;

export const getRotation = (state) => state.viewer.rotation;

export const getNoteDateFormat = (state) => state.viewer.noteDateFormat || defaultNoteDateFormat;

export const getPrintedNoteDateFormat = (state) => state.viewer.printedNoteDateFormat || defaultPrintedNoteDateFormat;

export const isFullScreen = (state) => state.viewer.isFullScreen;

export const doesDocumentAutoLoad = (state) => state.viewer.doesAutoLoad;

export const isDocumentReadOnly = (state) => state.viewer.isReadOnly;

export const getCustomPanels = (state) => state.viewer.customPanels;

export const getCustomModals = (state) => state.viewer.customModals;

export const getPageLabels = (state) => state.viewer.pageLabels;

export const getSelectedThumbnailPageIndexes = (state) => state.viewer.selectedThumbnailPageIndexes;

export const getShiftKeyThumbnailPivotIndex = (state) => state.viewer.shiftKeyThumbnailPivotIndex;

export const getDisabledCustomPanelTabs = (state) => state.viewer.customPanels.reduce((disabledTabs, { tab }) => {
  if (state.viewer.disabledElements[tab.dataElement]?.disabled) {
    disabledTabs.push(tab.dataElement);
  }
  return disabledTabs;
}, []);

export const isEmbedPrintSupported = (state) => isChrome && !isAndroid && state.viewer.useEmbeddedPrint;

export const isOutlineControlVisible = (state) => state.viewer.outlineControlVisibility;

export const shouldAutoExpandOutlines = (state) => state.viewer.autoExpandOutlines;

export const isAnnotationNumberingEnabled = (state) => {
  return state.viewer.isAnnotationNumberingEnabled;
};

export const isBookmarkIconShortcutVisible = (state) => state.viewer.bookmarkIconShortcutVisibility;

export const getColorMap = (state) => state.viewer.colorMap;

export const getCursorOverlayData = (state) => state.viewer.cursorOverlay;

export const getOpenElements = (state) => state.viewer.openElements;

export const getDisabledElements = (state) => state.viewer.disabledElements;

export const getcurrentStyleTab = (state, colorMapKey) => state.viewer.colorMap[colorMapKey]?.currentStyleTab;

export const getIconColor = (state, colorMapKey) => state.viewer.colorMap[colorMapKey]?.iconColor;

export const getCustomNoteFilter = (state) => state.viewer.customNoteFilter;

export const getInlineCommentFilter = (state) => state.viewer.inlineCommentFilter;

export const getIsReplyDisabled = (state) => state.viewer.isReplyDisabledFunc;

export const getZoomList = (state) => state.viewer.zoomList;

export const getMeasurementUnits = (state) => state.viewer.measurementUnits;

export const getIsNoteEditing = (state) => state.viewer.isNoteEditing;

export const getMaxSignaturesCount = (state) => state.viewer.maxSignaturesCount;

export const getUserData = (state) => state.viewer.userData;

export const getIsMentionEnabled = (state) => !!state.viewer.userData;

export const getSignatureFonts = (state) => state.viewer.signatureFonts;

export const getSelectedTab = (state, id) => state.viewer.tab[id];

export const getCustomElementOverrides = (state, dataElement = '') => state.viewer.customElementOverrides[dataElement];

export const getPopupItems = (state, popupDataElement) => state.viewer[popupDataElement] || [];

export const getMenuOverlayItems = (state) => state.viewer.menuOverlay;

export const getIsThumbnailMergingEnabled = (state) => state.viewer.isThumbnailMerging;

export const getIsThumbnailReorderingEnabled = (state) => state.viewer.isThumbnailReordering;

export const isThumbnailMultiselectEnabled = (state) => state.viewer.isThumbnailMultiselect;

export const getIsMultipleViewerMerging = (state) => state.viewer.isMultipleViewerMerging;

export const getEnableNotesPanelVirtualizedList = (state) => state.viewer.enableNotesPanelVirtualizedList;

export const notesShowLastUpdatedDate = (state) => state.viewer.notesShowLastUpdatedDate;

export const getAllowPageNavigation = (state) => state.viewer.allowPageNavigation;

export const getCustomMeasurementOverlay = (state) => state.viewer.customMeasurementOverlay;

export const getAnnotationContentOverlayHandler = (state) => state.viewer.annotationContentOverlayHandler;

export const getEnableMouseWheelZoom = (state) => state.viewer.enableMouseWheelZoom;

export const isReaderMode = (state) => state.viewer.isReaderMode;

export const getCertificates = (state) => state.digitalSignatureValidation.certificates;

export const getTrustLists = (state) => state.digitalSignatureValidation.trustLists;

export const getValidationModalWidgetName = (state) => state.digitalSignatureValidation.validationModalWidgetName;

export const getVerificationResult = (state, fieldName) => state.digitalSignatureValidation.verificationResult[fieldName] || {};

export const getIsRevocationCheckingEnabled = (state) => state.digitalSignatureValidation.isRevocationCheckingEnabled;

export const getRevocationProxyPrefix = (state) => state.digitalSignatureValidation.revocationProxyPrefix;

export const isThumbnailSelectingPages = (state) => state.viewer.thumbnailSelectingPages;

export const getWatermarkModalOptions = (state) => state.viewer.watermarkModalOptions;

export const getZoomStepFactors = (state) => state.viewer.zoomStepFactors;

// warning message
export const getWarningMessage = (state) => state.viewer.warning?.message || '';

export const getWarningTitle = (state) => state.viewer.warning?.title || '';

export const getWarningConfirmEvent = (state) => state.viewer.warning?.onConfirm;

export const getWarningConfirmBtnText = (state) => state.viewer.warning?.confirmBtnText;

export const getWarningSecondaryEvent = (state) => state.viewer.warning?.onSecondary;

export const getWarningSecondaryBtnText = (state) => state.viewer.warning?.secondaryBtnText;

export const getWarningSecondaryBtnClass = (state) => state.viewer.warning?.secondaryBtnClass;

export const getWarningCancelEvent = (state) => state.viewer.warning?.onCancel;

export const getShowAskAgainCheckbox = (state) => state.viewer.warning?.showAskAgainCheckbox || false;

export const getShowDeleteTabWarning = (state) => state.viewer.warning?.showDeleteTabWarning ?? true;

export const isAccessibleMode = (state) => state.viewer.isAccessibleMode;

export const getWarningTemplateStrings = (state) => state.viewer.warning?.templateStrings || {};

export const getWarningModalClass = (state) => state.viewer.warning?.modalClass || '';

export const getWarningCloseEvent = (state) => state.viewer.warning?.onClose;

// error message
export const getErrorMessage = (state) => state.viewer.errorMessage || '';

// error title
export const getErrorTitle = (state) => state.viewer.errorTitle || '';

// document
export const getPasswordAttempts = (state) => state.document.passwordAttempts;

export const getPrintQuality = (state) => state.document.printQuality;

export const getDefaultPrintOptions = (state) => state.document.defaultPrintOptions;

export const getTotalPages = (state, documentViewerKey = 1) => state.document.totalPages[documentViewerKey];

export const getOutlines = (state) => state.document.outlines;

export const getOutlineEditingEnabled = (state) => state.viewer.isOutlineEditingEnabled;

export const getBookmarks = (state) => state.document.bookmarks;

export const getPortfolio = (state) => state.document.portfolio;

export const getLayers = (state) => state.document.layers;

export const getLoadingProgress = (state) => state.document.loadingProgress;

// user
export const getUserName = (state) => state.user.name;

// advanced
export const getServerUrl = (state) => state.advanced.serverUrl;

// search
export const getSearchValue = (state) => state.search.value;

export const shouldClearSearchPanelOnClose = (state) => state.search.clearSearchPanelOnClose;

export const isCaseSensitive = (state) => state.search.isCaseSensitive;

export const getReplaceValue = (state) => state.search.replaceValue;

export const getNextResultValue = (state) => state.search.nextResult;

export const isWholeWord = (state) => state.search.isWholeWord;

export const isWildcard = (state) => state.search.isWildcard;

export const isSearchUp = (state) => state.search.isSearchUp;

export const isAmbientString = (state) => state.search.isAmbientString;

export const isRegex = (state) => state.search.isRegex;

export const isProcessingSearchResults = (state) => state.search.isProcessingSearchResults;

export const getRedactionSearchPatterns = (state) => state.search.redactionSearchPatterns;

export const getNoteTransformFunction = (state) => state.viewer.noteTransformFunction;

export const getCustomNoteSelectionFunction = (state) => state.viewer.customNoteFunction;

export const getCustomApplyRedactionsHandler = (state) => state.viewer.customApplyRedactionsHandler;

export const getCustomMultiViewerSyncHandler = (state) => state.viewer.customMultiViewerSyncHandler;

export const getCustomMultiViewerAcceptedFileFormats = (state) => state.viewer.customMultiViewerAcceptedFileFormats;

export const isSnapModeEnabled = (state) => state.viewer.isSnapModeEnabled;

export const getUnreadAnnotationIdSet = (state) => state.viewer.unreadAnnotationIdSet;

export const getCurrentLanguage = (state) => state.viewer.currentLanguage;

export const shouldFadePageNavigationComponent = (state) => state.viewer.fadePageNavigationComponent;

export const isContentEditWarningHidden = (state) => state.viewer.hideContentEditWarning;

export const getCurrentContentBeingEdited = (state) => state.viewer.currentContentBeingEdited;

export const getFeatureFlags = (state) => state.featureFlags;

export const isRightClickAnnotationPopupEnabled = (state) => state.viewer.enableRightClickAnnotationPopup;

export const isInDesktopOnlyMode = (state) => state.viewer.isInDesktopOnlyMode;

export const getPanelWidth = (state, dataElement) => state.viewer.panelWidths[dataElement] || panelMinWidth;

export const pageDeletionConfirmationModalEnabled = (state) => state.viewer.pageDeletionConfirmationModalEnabled;

export const getPageReplacementFileList = (state) => state.viewer.pageReplacementFileList;

export const getPageManipulationOverlayItems = (state) => state.viewer.pageManipulationOverlay;

export const getMultiPageManipulationControlsItems = (state) => state.viewer.multiPageManipulationControls;

export const getMultiPageManipulationControlsItemsSmall = (state) => state.viewer.multiPageManipulationControlsSmall;

export const getMultiPageManipulationControlsItemsLarge = (state) => state.viewer.multiPageManipulationControlsLarge;

export const getPageManipulationOverlayAlternativePosition = (state) => state.viewer.pageManipulationOverlayAlternativePosition;

export const openingPageManipulationOverlayByRightClickEnabled = (state) => state.viewer.pageManipulationOverlayOpenByRightClick;

export const getThumbnailControlMenuItems = (state) => state.viewer.thumbnailControlMenu;

export const shouldShowPresets = (state) => {
  const response = state.viewer.toolButtonObjects[state.viewer.activeToolName];
  return response?.showPresets ?? true;
};

export const shouldResetAudioPlaybackPosition = (state) => state.viewer.shouldResetAudioPlaybackPosition;

export const getActiveSoundAnnotation = (state) => state.viewer.activeSoundAnnotation;

export const getWv3dPropertiesPanelModelData = (state) => state.wv3dPropertiesPanel.modelData;

export const getWv3dPropertiesPanelSchema = (state) => state.wv3dPropertiesPanel.schema;

export const getOfficeEditorCursorProperties = (state) => state.officeEditor.cursorProperties;

export const getOfficeEditorSelectionProperties = (state) => state.officeEditor.selectionProperties;

export const getAvailableFontFaces = (state) => state.officeEditor.availableFontFaces;

export const getCSSFontValues = (state) => state.officeEditor.cssFontValues;

export const getContentBoxEditor = (state) => state.viewer.contentBoxEditor;

export const getAnnotationFilters = (state) => state.viewer.annotationFilters;

export const getNotesPanelCustomHeaderOptions = (state) => state.viewer.notesPanelCustomHeaderOptions;

export const getNotesPanelCustomEmptyPanel = (state) => state.viewer.notesPanelCustomEmptyPanel;

export const isReplyAttachmentPreviewEnabled = (state) => state.viewer.replyAttachmentPreviewEnabled;

export const getReplyAttachmentHandler = (state) => state.viewer.replyAttachmentHandler;

export const getCustomSettings = (state) => state.viewer.customSettings;

export const isToolDefaultStyleUpdateFromAnnotationPopupEnabled = (state) => state.viewer.toolDefaultStyleUpdateFromAnnotationPopupEnabled;

export const getShortcutKeyMap = (state) => state.viewer.shortcutKeyMap;

export const getMultiViewerSyncScrollMode = (state) => state.viewer.multiViewerSyncScrollMode;

export const getTextSignatureQuality = (state) => state.viewer.textSignatureCanvasMultiplier;

export const getIsMeasurementAnnotationFilterEnabled = (state) => state.viewer.isMeasurementAnnotationFilterEnabled;

// We will need to refactor this once we have generic panels
export const isRightPanelOpen = (state) => {
  const rightPanelElements = [
    DataElements.NOTES_PANEL,
    DataElements.SEARCH_PANEL,
    DataElements.REDACTION_PANEL,
    DataElements.TEXT_EDITING_PANEL,
    DataElements.WV3D_PROPERTIES_PANEL,
    DataElements.COMPARE_PANEL,
    DataElements.WATERMARK_PANEL
  ];

  return rightPanelElements.some((element) => isElementOpen(state, element));
};

export const getOpenRightPanelWidth = (state) => {
  const panelMap = [
    { name: DataElements.NOTES_PANEL, isOpen: isElementOpen, getWidth: getNotesPanelWidthWithResizeBar },
    { name: DataElements.SEARCH_PANEL, isOpen: isElementOpen, getWidth: getSearchPanelWidthWithResizeBar },
    { name: DataElements.WATERMARK_PANEL, isOpen: isElementOpen, getWidth: getWatermarkPanelWidth },
    { name: DataElements.TEXT_EDITING_PANEL, isOpen: isElementOpen, getWidth: getTextEditingPanelWidth },
    { name: DataElements.WV3D_PROPERTIES_PANEL, isOpen: isElementOpen, getWidth: getWv3dPropertiesPanelWidth },
    { name: DataElements.COMPARE_PANEL, isOpen: isElementOpen, getWidth: getComparePanelWidthWithResizeBar },
    { name: DataElements.REDACTION_PANEL, isOpen: isElementOpen, getWidth: getRedactionPanelWidth },
  ];

  for (const panel of panelMap) {
    if (panel.isOpen(state, panel.name)) {
      return panel.getWidth(state);
    }
  }

  return 0; // return 0 if no panel is open
};

export const getIsShowComparisonButtonEnabled = (state) => {
  return state.viewer.isShowComparisonButtonEnabled;
};

export const getIsMultiViewerModeAvailable = (state) => {
  return state.viewer.isMultiViewerModeAvailable;
};

export const getMaxPasswordAttempts = (state) => {
  return state.document.maxPasswordAttempts;
};