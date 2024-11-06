import { onClickHandller_login,onClickHandller_signup } from "../event_handllers/event_handllers.login_section"
export default function Btn({ loginUseState, userUseState }) {
    return (<>
        {loginUseState[0] ? <div className="btn" onClick={() => { onClickHandller_login(userUseState) }}>Log in</div> : <div className="btn" onClick={onClickHandller_signup(userUseState, loginUseState)}>Sign up</div>}
    </>)
}

