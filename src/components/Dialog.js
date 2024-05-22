import "./Dialog.scss";

export function Dialog(dialogPack) {
  dialogPack = dialogPack.dialogPack;

  return (
    <div className="dialog-parent dialog-flexbox">
      <div className="dialog-flexbox">
        <div className="dialog-container-generic">
          {dialogPack.dialogTitle !== "" && (
            <div className="dialog-title"> {dialogPack.dialogTitle} </div>
          )}

          <div>
            <div className="dialog-description-generic">
              {" "}
              {dialogPack.dialogMessage}{" "}
            </div>
            {dialogPack.dialogShowErrorCode === true ? (
              <div className="dialog-description">
                {" "}
                Error Code: {dialogPack.dialogErrorCode}
              </div>
            ) : null}
          </div>
          {dialogPack.dialogTimer === true && (
            <div className="dialog-description">
              {dialogPack.dialogCountdown}
            </div>
          )}
          <div className="dialog-buttons-container">
            {dialogPack.dialogShowSecondaryButton && (
              <div
              style={{
                background:"crimson",
                padding:"1em 2em",
                boxSizing:"border-box",
                borderRadius:'8px'
            

              }}
                onClick={dialogPack.dialogSecondaryButtonCallback}
              >
              
                  {dialogPack.showSecondaryButtonTexts
                    ? dialogPack.dialogSecondaryButtonLabel
                    : "Back"
                }
              </div>
            )}
            <div
            style={{
                background:"teal",
                padding:"1em 2em",
                boxSizing:"border-box",
                borderRadius:'8px'
            }}
              onClick={dialogPack.dialogPrimaryButtonCallback}
             
              bold={true}
              maxWidth={300}
            >
                
                {dialogPack.showSecondaryButtonTexts
                  ? dialogPack.dialogPrimaryButtonLabel
                  : "OK"
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
