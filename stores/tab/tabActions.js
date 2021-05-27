export const SET_TRADE_MODAL_VISIBILITY = 'SET_TRADE_MODAL_VISIBILITY';

export const setTradeModalVisilitySuccess = (isVisible) => ({
    type: SET_TRADE_MODAL_VISIBILITY,
    payload: { isVisible }
})

export function setTradeModalVisility(isVisible) {
    return dispatch => {
        dispatch(setTradeModalVisilitySuccess(isVisible))
    }
}