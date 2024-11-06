import Btn from "./btn";
import { onChangeHandller } from "./event_handllers"

export default function LogSection() {
    let [user, setuser] = useState({email:"",passwoed:""});
    let [isLogin, setIsLogin] = useState(true);
    return (<>
        <div className="logSection">
            <input type="text" placeholder="Email" value={user[0]} onChange={(e) => {onChangeHandller(e.target.value,[user, setuser],"Email")}}/>
            <input type="text" placeholder="Password" value={user[1]} onChange={(e) => { onChangeHandller(e.target.value, [user, setuser], "Password") }}/>
            <Btn loginUseState={[isLogin, setIsLogin]} userUseState={[user, setuser]} />
        </div>
    </>)
}