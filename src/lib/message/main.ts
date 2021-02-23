import Message from "./Message.vue";

import { createApp, h } from "vue";

type MessageType = 'info' | 'success' | 'error' | 'warning';
type optionProps = {
    type?: MessageType;
    message: string;
    top?: number;
}
const instanceList: any[] = [];
const createMessage = (options: optionProps) => {
    const { type="info", message,top } = options;
    const mountNode = document.createElement("div");
    document.body.appendChild(mountNode);
    

    const len = instanceList.length;
    console.log("len:",len)
    let verticalOffset = top || 20;
    if (len >= 1){
        // 多个message时的设置 TODO:这里处理方法不太好
        instanceList.forEach((item,index) => {
            const oMessage = document.getElementsByClassName("sea-message")[index];
            if(oMessage){
                const offsetHeight = oMessage.getBoundingClientRect().height;
                verticalOffset += offsetHeight + 16;
            }
        })
    }
    const app = createApp({
        render() {
            return h(
                Message,
                {
                    type: type,
                    top: verticalOffset
                },
                { default: message }
            )
        }
    });
    app.mount(mountNode);
    instanceList.push(mountNode);
}

export default createMessage;