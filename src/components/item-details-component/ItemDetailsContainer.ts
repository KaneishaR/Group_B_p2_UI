import { IState } from "../../reducers";
import { connect } from "react-redux";
import ItemDetailsComponent from "./ItemDetailsComponent";
import {detailsAction} from "../../actions/item-details-actions"
import { thisItemActionTypes } from "../../actions/browse-items-actions";


const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        thisItem: state.setThisItem.thisItem,
        cart: state.setCartItems.cartItems
    }
}

const mapDispatchToProps = {
    detailsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsComponent);