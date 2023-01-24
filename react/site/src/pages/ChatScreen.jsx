import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";

export default function ChatScreen({ id }) {
  const intRef = useRef(null);
  const [userName, setUserName] = useState("Temaa :");
  const [text, setText] = useState("");
  const [chats, setChats] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    fetch("http://192.168.1.49:3005/api/chats")
      .then((res) => res.json())
      .then((data) => {
        setChats(data.body.reverse());
        setFinished(true);
      });
  }, []);

  useEffect(() => {
    if (finished) {
      clearInterval(intRef.current);
      intRef.current = setInterval(() => {
        fetch("http://192.168.1.49:3005/api/chats/last")
          .then((res) => res.json())
          .then((data) => {
            setChats([data.body, ...chats]);
          });
      }, 500);
    }
  }, [finished]);

  const send = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("hoosoon zurvas");
      return;
    }
    fetch("http://192.168.1.49:3005/api/chats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: userName, text }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const Delete = (body) => {
    console.log("clicked");
    fetch("http://192.168.1.49:3005/api/chats", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: body.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="chat-container">
            <div className="wrapper">
              <ul>
                {chats.map((chat) => {
                  return <ChatItem Delete={Delete} chat={chat} key={chat.id} />;
                })}
              </ul>
            </div>
            <form onSubmit={send}>
              <textarea
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                type="text"
              />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
const ChatItem = ({ chat, Delete }) => {
  return (
    <li className="chat-item">
      <div className="text d-flex justify-content-between ">
        <div>
          <strong className="author">{chat.name}</strong>
          {chat.text}
        </div>
        <button onClick={Delete}>delete</button>
      </div>
      <div className="createAt">
        {dayjs(chat.createAt).format("YYYY.MM.DD HH:mm")}
      </div>
    </li>
  );
};
