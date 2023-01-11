import { RESTAURANT_LIST_SUCCESS, RESTAURANT_LIST_FAIL } from "../constants/restaurantConstants";

export const restaurantListReducer = (state = {restaurant:[]},action) => {
    switch (action.type) {
        case RESTAURANT_LIST_SUCCESS:
            return { restaurant: action.payload }

            case RESTAURANT_LIST_FAIL:
            return { restaurant: action.console.error }
            default:
                return state
    }
}












// reducer is a functiom that accepts an empty state and an action type and it will return a new updated state