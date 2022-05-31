import CommonNav from "@/components/CommonNav.vue" // 头部
import CommonFoot from "@/components/CommonFoot.vue" // 头部


function install(Vue) {
    Vue.component("Common-Nav", CommonNav);
    Vue.component("Common-Foot", CommonFoot);
};

export default install;