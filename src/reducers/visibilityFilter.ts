import { VisibilityFilters } from '../actions';
import { bindActionCreators } from 'redux';


const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action: any) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;