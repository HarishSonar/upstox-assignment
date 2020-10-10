import {connect} from 'react-redux';
import {bindActionCreators} from'redux';

function mapStatesToProps(state = {}){
    return {
        data:state.data
    }
}

function mapDispatchToProps(dispatch){
   
}

export default connect(mapStatesToProps, mapDispatchToProps);