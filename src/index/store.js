import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import reducers from './reducers';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers(reducers),
    {
        from:'北京',
        to:'上海',
        isCitySelectorVisible:false,
        currentSelectingLeftCity:false,
        cityData:null,
        isLoadingCityData:false,// 用走截流
        isDateSelectorVisible:false,
        highSpeed:false,
    },
    applyMiddleware(thunk)
)