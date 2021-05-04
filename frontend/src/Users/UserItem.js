import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import Edit from '../Editing/Edit'




function UserItem({dataItem}){

    const { removeUser }= useContext(Context)

    return(        
        <tr>
            <td>{dataItem.id}</td>
            <td>{dataItem.first_name}</td>
            <td>{dataItem.last_name}</td>
            <td>{dataItem.age}</td>
            <td>{dataItem.gender}</td>
            <td className='editing'>
                <form >
                    <Edit dataItem={dataItem}/>
                    <button type="button" className='btn btn-danger my-button' onClick={removeUser.bind(null, dataItem.id)}>Remove</button>
                </form>
            </td>
        </tr>
    
    )
    
}

UserItem.propTypes = {
    props: PropTypes.object
}

export default UserItem