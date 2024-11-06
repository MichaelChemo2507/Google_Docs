import { useState } from "react";
import Btn from "./btn";
import { onChangeHandller } from "../event_handllers/event_handllers.login_section"

export default function LogSection() {
    let [user, setUser] = useState({email:"",passwoed:""});
    let [isLogin, setIsLogin] = useState(false);
    return (<>
        <div className="logSection">
            <input type="text" placeholder="Email" value={user[0]} onChange={(e) => {onChangeHandller(e.target.value,[user, setUser],"Email")}}/>
            <input type="text" placeholder="Password" value={user[1]} onChange={(e) => { onChangeHandller(e.target.value, [user, setUser], "Password") }}/>
            <Btn loginUseState={[isLogin, setIsLogin]} userUseState={[user, setUser]} />
        </div>
    </>)
}