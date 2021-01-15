
/* 
用于文档展示代码的逻辑

*/
import { reactive, computed } from "vue";
import "prismjs";
import "prismjs/themes/prism.css";
import copy from "copy-to-clipboard";
const Prism = (window as any).Prism;

interface DataProps {
    __docs: string;
    isShowCode: boolean;
    html: string;
    viewCode: () => void;
    handleCopy: () => void;
}
export const useShowCode = (docs: string) => {
    const demoData: DataProps = reactive({
        __docs: docs,
        isShowCode: false,
        html: computed(() => {
            return Prism.highlight(demoData.__docs, Prism.languages.html, "html");
        }),
        viewCode: () => {
            demoData.isShowCode = !demoData.isShowCode;
        },
        handleCopy: () => {
            const result = copy(demoData.__docs, {
                debug: true,
                message: "Press #{key} to copy",
                format: "text/plain",
            });
            if (result) {
                alert("复制成功")
            }
        },
    });
    return demoData;
}

