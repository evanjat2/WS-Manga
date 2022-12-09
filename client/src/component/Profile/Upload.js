import { useRef } from "react";

import { IKContext, IKImage, IKUpload } from "imagekitio-react";

import { useAppContext } from "../../context/appContext";

const Upload = ({ value, setValue }) => {
  const onError = (err) => {
    console.log("Error", err);
  };
  const onSuccess = (res) => {
    setValue(res.name);
  };
  const reftest = useRef(null);
  const { urlEndpoint, publicKey, authenticationEndpoint } = useAppContext();
  return (
    <div className="w-full">
      <IKContext
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticationEndpoint={authenticationEndpoint}
      >
        {reftest && (
          <button
            className="hover:text-orange border-4 border-dotted border-gray-300 rounded-lg text-blue font-bold w-full"
            onClick={() => reftest.current.click()}
          >
            Pilih Foto
          </button>
        )}
        <IKUpload
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
          inputRef={reftest}
          style={{ display: "none" }}
        />
      </IKContext>
    </div>
  );
};
export default Upload;
