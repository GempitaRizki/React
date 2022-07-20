import {call,put} from 'redux-saga/effects'
import RegionApi from '../../api/RegionApi'
import { GetRegionSuccess,GetRegionFailed, DelRegionSuccess, DelRegionFailed, AddRegionSuccess, AddRegionFailed } from '../Action/RegionAction'

function* handleGetRegion(){
    try {
        const result = yield call(RegionApi.show)
        yield put(GetRegionSuccess(result))
    } catch (error) {
        yield put(GetRegionFailed(error))
    }
}

function* handleDelRegion(action){
    const{payload} = action
    try {
        const result = yield call(RegionApi.deleted,payload)
        yield put(DelRegionSuccess(payload))
    } catch (error) {
        yield put(DelRegionFailed(error))
    }
}

function* handleAddRegion(action){
    const {payload} = action
    try {
        const result = yield call(RegionApi.create,payload)
        yield put(AddRegionSuccess(result.data))
    } catch (error) {
        yield put(AddRegionFailed(error))
    }
}

export {
    handleGetRegion,
    handleDelRegion,
    handleAddRegion
}