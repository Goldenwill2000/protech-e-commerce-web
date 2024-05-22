import { HideDialog, ShowDialog } from "../utilities/EventBus";


export const DialogType = {
  SUCCESS: 1,
  ERROR: 2,
  MISSING: 3,
  DELETE: 4,
  PUBLISH: 5,
};

export const DialogPack = {
  showDialog: false,
  dialogType: DialogType.SUCCESS,
  dialogTitle: "Title",
  dialogMessage:"Message",
  dialogShowPrimaryButton: false,
  dialogListInfo: [],
  dialogErrorCode: 0,
  dialogPrimaryButtonLabel:"Ok",

  dialogShowErrorCode: false,
  dialogPrimaryButtonCallback: () => {
    HideDialog();
  },
  dialogShowSecondaryButton: false,
  dialogSecondaryButtonLabel: "Back",
  dialogSecondaryButtonCallback: () => {},
  dialogSecondaryAsRealMain: false,
  dialogTimer: false,
  dialogCountdown: 0,
  showSecondaryButtonTexts: false,
};

export function GetDialogPack(override) {
  var newDialogPack = { ...DialogPack };
  Object.keys(override).forEach((eachAttribute) => {
    newDialogPack[eachAttribute] = override[eachAttribute];
  });
  return newDialogPack;
}

export function ShowMessage(
  title,
  message,
  callback = () => {},
  type,
  errorCode
) {
  ShowDialog(
    GetDialogPack({
      showDialog: true,
      dialogType: type,
      dialogTitle: title,
      dialogMessage: message,
      dialogErrorCode: errorCode,
      dialogShowPrimaryButton: true,
      dialogPrimaryButtonLabel: "Ok",
      dialogPrimaryButtonCallback: () => {
        HideDialog();
        callback();
      },
    })
  );
}
