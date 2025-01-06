<template>
    <div class="w-screen h-screen flex">
        <!--Side bar-->
        <side-bar-menu v-show="showSide"></side-bar-menu>

        <div class="w-full h-full bg-gray-400">
            <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
                <!--Hamburguer menu-->
                <hamburguerMenu @toggle-sidebar="toggleSideBar"></hamburguerMenu>
            </div>
            <div class="h-[calc(100vh-50px)] bg-gray-100">
                <h1 class="font-bold text-4xl">
                    Profile
                </h1>

            </div>
        </div>
    </div>
</template>

<script>
import sideBarMenu from "../components/sideBarMenu.vue";
import hamburguerMenu from "../components/hamburguerMenu.vue";

export default {
    components: {
        'side-bar-menu': sideBarMenu,
        'hamburguerMenu': hamburguerMenu
    },
    data() {
        return {
            showSide: true
        };
    },
    methods: {
        toggleSideBar() {
            this.showSide = !this.showSide;
        }
    }
};
</script>