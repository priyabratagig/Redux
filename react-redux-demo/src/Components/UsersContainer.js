import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../redux'

const UsersContainer = () => {
    const { loading, users, error } = useSelector(state => state.users);
    const dispatch = useDispatch();
    return (
        <div>
            {loading ? "... loading" : error ? error : <table style={{ margin: '0 auto' }}>
                <thead>
                    <tr>
                        <td>UserName</td>
                        <td>UserID</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map(ele => (<tr key={ele.id}>
                        <td>{ele.userName}</td>
                        <td>{ele.id}</td>
                    </tr>))}
                </tbody>
            </table>}
            <button onClick={() => dispatch(fetchUser())}>Get Users</button>
        </div>
    )
}

export default UsersContainer