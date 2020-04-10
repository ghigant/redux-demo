
export const PROFILE_GET = 'PROFILE_GET';
export const PROFILE_SET = 'PROFILE_SET';

export const PROFILE_FETCH = 'PROFILE_FETCH';
export const PROFILE_FETCH_SUCCESS = 'PROFILE_FETCH_SUCCESS';
export const PROFILE_FETCH_FAILURE = 'PROFILE_FETCH_FAILURE';

export const setProfile = (user = null) => ({
    type: PROFILE_SET,
    user
});