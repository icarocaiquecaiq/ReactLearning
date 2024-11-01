import propTypes from 'prop-types'

function UserGreeting(props) {
    /*
    if(props.isLoggedIn){
        return <h2>Bem-vindo {props.userName}</h2>
    }else{
        return <h2>Por favor, faça o login para continuar</h2>
    }
    */

    const welcomeMessage =  <h2 className="welcome-message">Welcome, {props.username}</h2> 
    const loginPrompt = <h2 className="login-prompt">Por favor, faça o login para continuar</h2> 

    return(
        props.isLoggedIn ?  welcomeMessage
                            : loginPrompt
    )
}

UserGreeting.propTypes = {
    username: propTypes.string,
    isLoggedIn: propTypes.bool
}

UserGreeting.defaultProps = {
    username: "visitante",
    isLoggedIn: true
}

export default UserGreeting