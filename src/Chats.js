import React from "react";
import "./Chats.css";
import Chat from "./Chat";
const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Uzun Çakar"
                message="sa bilader"
                timestamp="40 sec ago"
                profilePic="..."
            />
            <Chat
                name="Memo Delioglan"
                message="Ha Rizeden Amucan geldu"
                timestamp="33 min ago"
                profilePic="https://mir-s3-cdn-cf.behance.net/projects/404/4a0a1c102009157.Y3JvcCwxNDM4LDExMjUsMjgxLDA.png"
            />
             <Chat
                name="Bücür"
                message="LOL gel"
                timestamp="1 hour ago"
                profilePic="https://i.pinimg.com/originals/d2/f8/15/d2f815d3037dff1468846ed418b0a179.jpg"
            />
        </div>
    );
};

export default Chats;
