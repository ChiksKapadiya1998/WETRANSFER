import {apiConst, GET} from '../helpers/apiConstants';
import makeAPIRequest from '../helpers/global';
import {POST_DATA, POST_LIST_DATA, USER_DATA} from './types';

export const getUserDetail =
  (data: {onSuccess: () => void; onFail: () => void}) =>
  async (dispatch: any): Promise<unknown> =>
    makeAPIRequest(GET, apiConst.getUser, null, null, null)
      .then((response: unknown) => {
        dispatch({type: USER_DATA, payload: response?.data?.data});
        if (data?.onSuccess) data.onSuccess(response);
      })
      .catch((error: unknown) => {
        if (data.onFail) data.onFail(error);
      });

export const getPostDetail =
  (data: {onSuccess: () => void; onFail: () => void}) =>
  async (dispatch: any): Promise<unknown> =>
    makeAPIRequest(
      GET,
      `${apiConst.getPost}/${data?.data?.postID}`,
      null,
      null,
      null,
    )
      .then((response: unknown) => {
        dispatch({type: POST_DATA, payload: response?.data?.data});
        if (data?.onSuccess) data.onSuccess(response);
      })
      .catch(error => {
        if (data.onFail) data.onFail(error);
      });

export const getPostListDetail =
  (data: {onSuccess: () => void; onFail: () => void}) =>
  async (dispatch: any): Promise<unknown> =>
    makeAPIRequest(GET, apiConst.getPost, null, null, null)
      .then((response: unknown) => {
        dispatch({type: POST_LIST_DATA, payload: response?.data?.data});
        if (data?.onSuccess) data.onSuccess(response);
      })
      .catch(error => {
        if (data.onFail) data.onFail(error);
      });
