# 介绍

```javascript
import TopNav from "../components/Topnav.vue";
import { defineComponent, inject, Ref } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    TopNav,
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return { menuVisible };
  },
});

```


## 1111
