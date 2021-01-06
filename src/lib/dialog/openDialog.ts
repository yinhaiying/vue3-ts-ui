import { createApp,h,App } from 'vue';
import Dialog from "./Dialog.vue";

type optionsProps = {
    title: string;
    content: string;
    beforeOk: () => boolean;
}
export const openDialog = (options: optionsProps) => {
  const { title, content, beforeOk} = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
//   const app = createApp(Dialog);

// 如果我们想要传递参数，需要使用render函数和h函数  
// h函数返回一个
const close = (app: App,el: HTMLElement) => {
  app.unmount(el);
  el.remove();
}
  const app = createApp({
      render(){
          return h(
              Dialog,
              { 
                visibility: true,
                "onUpdate:visibility":(newValue: boolean) => {
                  if(newValue == false){
                    // 为false就直接销毁
                    close(app,div);
                  }
                },
                beforeOk
              },  // 第二个参数：属性
              {title: title,default: content},   // 插槽
           );
      }  
  });
  app.mount(div);
}