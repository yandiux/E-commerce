import React from 'react'

const UserLogged = () => {


const token = localStorage.removeItem('token')

const logout = () => {
  token
  location.reload();
}

  return (
    <article className='back-user'>
      <div className='user-icon'>
      <i className="fa-solid fa-user-check fa-3x"></i>
      <h2 className='id-user'>User#89127391</h2>
      </div>
      <button className='btn-login1' onClick={logout}>Logout</button>
    </article>
  )
}

export default UserLogged