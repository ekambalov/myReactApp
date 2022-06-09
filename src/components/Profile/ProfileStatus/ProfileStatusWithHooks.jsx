import React, { useState } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);

  let [status, setStatus] = useState(props.status);

  const activateEditdeMode = () => {
    setEditMode(true);
  };

  const deactivateEditdeMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditdeMode}>{props.status ? props.status : "no status"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditdeMode} value={status} />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
