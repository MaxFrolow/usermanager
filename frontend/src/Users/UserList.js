import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';


 function UserList(props){
    
    return(
        <tbody>
            {props.data.map((dataItem, index) => {
                return <UserItem
                            dataItem={dataItem} 
                            key={index}
                            />    
            })}
        </tbody>
    )
}   

UserList.propTypes = {
    props: PropTypes.arrayOf(PropTypes.object)
}


export default UserList