import { StackActions } from "@react-navigation/native";
import { connect } from "react-redux";

const Preload = (props) => {
    
   if (!props.name) {
        props.navigation.dispatch(StackActions.replace('StarterStack'));
   } else {
        props.navigation.dispatch(StackActions.replace('AppTab'));
   }

    return null;
}

const mapStateToProp = (state) => {
    return {
        name: state.user.name
    };
}

export default connect(mapStateToProp)(Preload);