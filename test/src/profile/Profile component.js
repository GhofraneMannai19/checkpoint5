import React from "react";
import PropTypes from 'prop-types';
function Profile(props){
    const hand=props.handleName
    const styleObject={color:"red", textAlign:"center", fontSize: "large"}
    return(
      
    <div style={styleObject}>
        <div>{props.fullName}</div>
        <div>{props.bio}</div>
        <div>{props.profession}</div>
        <div>{props.age}</div>
        <button onClick={() => hand(props.fullName)}>click me</button>
        {props.children}
   </div>
    );
}

Profile.propTypes={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    age:PropTypes.number,

} 
Profile.defaultProps ={
age:19
}

export default Profile;