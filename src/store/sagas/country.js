import { put, takeLatest, all } from 'redux-saga/effects'
import axiosInstance from '../../services'
import {
    CountryTypes,
    CountryActions,
    CountryAddTypes,
    CountryAddAction,
    CountryGetIdTypes,
    CountryGetIdActions,
    updateCountryActionsTypes,
    updateCountryActions,
    CountrydeleteActionsTypes,
    CountrydeleteActions
} from '../actions'
import serviceList from '../../services/serviceList'
import { API_MESSAGES } from '../../utils/constants'

function* fetchcountrylist(actions) {
  const { params } = actions
  const json = yield axiosInstance.get(serviceList.country, { params })
  if (json.status === 200) {
    yield put(CountryActions.savecountrylistResponse(json.data))
  } else {
    yield put(CountryActions.savecountrylistResponse([]))
  }
}

function* fetchCountryAdd(action) {
  const { payload } = action
  try {
    const data = yield axiosInstance.post(serviceList.country, payload)
    if (data && data.data) {
      yield put(CountryAddAction.saveCountryResponse(data.data))
    }
  } catch (error) {
    yield put(CountryAddAction.saveCountryResponse(error && error.data))
  }
}

function* fetchCountry(actions) {
  const { id } = actions
  const endPointUrl = `${serviceList.country}/${id}`
  const json = yield axiosInstance.get(endPointUrl)
  if (json.status === 200) {
    yield put(CountryGetIdActions.saveCountryIdDetailsResponse(json.data))

  } else {  
    yield put(CountryGetIdActions.saveCountryIdDetailsResponse([]))
  }
}

function* fetchUpdateCountry (actions) {
  const { payload } = actions
  const { id, params } = payload && payload
  const endPointUrl = `${serviceList.country}/${id}`
  const json = yield axiosInstance.put(endPointUrl, params)
  if (json.status === 200) {
    yield put(updateCountryActions.saveupdateCountryResponse(json.data))
  } else {
    yield put(updateCountryActions.saveupdateCountryResponse([]))
  }
}

function*  fetchCountrydelete (actions) {
  const { id } = actions
  const deleteUrl = `${serviceList.country}/${id} `
  try {
  const json = yield axiosInstance.delete(deleteUrl)
  if (json.status === 200) {
    yield put(CountrydeleteActions.saveResponse(json.data))
  } else {
    yield put(CountrydeleteActions.saveResponse([]))
  }
}
catch (error) {
  const data = {status: 'error', message: API_MESSAGES.SOMETHING_WRONG}
  yield put({type:  CountrydeleteActionsTypes.RESPONSE, data})
}
}

export function* fetchcountryWatcher() {
    yield all([
      yield takeLatest(CountryTypes.GET_COUNTRY_LIST, fetchcountrylist),
      yield takeLatest(CountryAddTypes.COUNTRY_POST, fetchCountryAdd),
      yield takeLatest(CountryGetIdTypes.GET_COUNTRY_DETAILS, fetchCountry),
      yield takeLatest(updateCountryActionsTypes.UPDATE_COUNTRY, fetchUpdateCountry),
      yield takeLatest(CountrydeleteActionsTypes.REQUEST, fetchCountrydelete),
    ])
  }