import React from 'react'

const LoginPage = () => {
  return (
    <div>LoginPage
        <p className='name'>
           login id <input type="email" />
        </p>
        <p className='password'>
            enter passward <input type='password' maxLength={4}/>
        </p>
    </div>
  )
}

export default LoginPage