import { connect } from "react-redux";
import { removeCompletedTodos } from "../../actions";
import RemoveCompleted from "../../components/RemoveCompleted";

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(removeCompletedTodos());
        }
    }
}

const FilterLink = connect(
    null,
    mapDispatchToProps
)(RemoveCompleted);

export default FilterLink;