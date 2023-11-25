import { useEffect } from "react";

function useBeforeUnload(hasUnsavedChanges) {
  useEffect(() => {
    const beforeUnloadHandler = (event) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", beforeUnloadHandler);

    return () => {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
    };
  }, [hasUnsavedChanges]);
}

export default useBeforeUnload;
