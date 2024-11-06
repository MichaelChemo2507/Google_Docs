export default function Btn({loginUseState,userUseState}) {
    return (<>
        {loginUseState[0] ? <div className="btn" onClick={() => { onClickHandller_login(userUseState, loginUseState) }}>Log in</div> : <div className="btn" onClick={onClickHandller_signup(userUseState, loginUseState)}>Sign up</div>}
    </>)
}

