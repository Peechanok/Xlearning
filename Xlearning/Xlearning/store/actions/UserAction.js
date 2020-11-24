export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
export const DELETE_USER = "DELETE_USER";

export const updateUserProfile = (profile) => {
  let { id, ...profileWithNoId } = profile;
  return { type: UPDATE_USER_PROFILE, id: id, profile: profileWithNoId };
};

export const updateUserProfileWithId = (uid, profile) => {
  let { id, ...profileWithNoId } = profile;
  return { type: UPDATE_USER_PROFILE, id: uid, profile: profileWithNoId };
};

export const deleteUser = (id) => {
  return { type: DELETE_USER, id: id };
};
