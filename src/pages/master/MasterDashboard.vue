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
                <div class="flex justify-between p-2 gap-2">

                    <div class="border border-black p-1  rounded-lg hover:bg-gray-700 hover:text-white w-full">
                        <div class="flex justify-between mb-5 p-2">
                            <p>Lucro</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign "><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg></div>
                        <div class="m-10 flex items-center justify-center gap-1 text-green-600">
                            <h1 class="text-4xl">7.343,53</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                        </div>
                        <div>
                            <p class="text-md opacity-40">Últimas 24 horas</p>
                        </div>
                    </div>

                    <div class="border border-black p-1  rounded-lg hover:bg-gray-700 hover:text-white w-full">
                        <div class="flex justify-between mb-5 p-2">
                            <p>Perdas</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-wide-narrow"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h10"/><path d="M11 8h7"/><path d="M11 12h4"/></svg></div>
                        <div class="m-10 flex items-center justify-center gap-1 text-red-600">
                            <h1 class="text-4xl ">346,23</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-down"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
                        </div>
                        <div>
                            <p class="text-md opacity-40">Nos últimos 7 dias</p>
                        </div>
                    </div>

                    <div class="border border-black p-1  rounded-lg hover:bg-gray-700 hover:text-white w-full">
                        <div class="flex justify-between mb-5 p-2">
                            <p>Devoluções</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg></div>
                        <div class="m-10 flex items-center justify-center gap-1">
                            <h1 class="text-4xl ">45</h1>
                        </div>
                        <div>
                            <p class="text-md opacity-40">Nos últimos 7 dias</p>
                        </div>
                    </div>

                    <div class="border border-black p-1  rounded-lg hover:bg-gray-700 hover:text-white w-full">
                        <div class="flex justify-between mb-5 p-2">
                            <p>Avaliações</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg></div>
                        <div class="m-10 flex items-center justify-center gap-1 ">
                            <h1 class="text-4xl ">4634</h1>
                           
                        </div>
                        <div>
                            <p class="text-md opacity-40">Nos últimos 7 dias</p>
                        </div>
                    </div>
                </div>

                <div class="container p-2 mx-auto">
    <h1 class="text-2xl font-bold mb-4 text-gray-700">Tabela de Vendas</h1>
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 bg-white">
        <thead class="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Produto</th>
            <th scope="col" class="px-6 py-3">Vendedor</th>
            <th scope="col" class="px-6 py-3">Data da Venda</th>
            <th scope="col" class="px-6 py-3">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-100">
            <td class="px-6 py-4">1</td>
            <td class="px-6 py-4">Smartphone X12</td>
            <td class="px-6 py-4">Ana Clara</td>
            <td class="px-6 py-4">2025-01-01</td>
            <td class="px-6 py-4">R$ 3,200.00</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-100">
            <td class="px-6 py-4">2</td>
            <td class="px-6 py-4">Laptop Pro 15</td>
            <td class="px-6 py-4">Carlos Eduardo</td>
            <td class="px-6 py-4">2025-01-03</td>
            <td class="px-6 py-4">R$ 6,500.00</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-100">
            <td class="px-6 py-4">3</td>
            <td class="px-6 py-4">Fone de Ouvido XYZ</td>
            <td class="px-6 py-4">Mariana Silva</td>
            <td class="px-6 py-4">2025-01-05</td>
            <td class="px-6 py-4">R$ 450.00</td>
          </tr>
          <tr class="bg-white hover:bg-gray-100">
            <td class="px-6 py-4">4</td>
            <td class="px-6 py-4">Monitor Ultra HD</td>
            <td class="px-6 py-4">João Pedro</td>
            <td class="px-6 py-4">2025-01-06</td>
            <td class="px-6 py-4">R$ 2,300.00</td>
          </tr>
          <tr class="bg-white hover:bg-gray-100">
            <td class="px-6 py-4">5</td>
            <td class="px-6 py-4">Monitor</td>
            <td class="px-6 py-4">José Cardoso</td>
            <td class="px-6 py-4">2025-01-05</td>
            <td class="px-6 py-4">R$ 5,200.00</td>
          </tr>
          <tr class="bg-white hover:bg-gray-100">
            <td class="px-6 py-4">6</td>
            <td class="px-6 py-4">Computador Gamer</td>
            <td class="px-6 py-4">Pedro Moreira</td>
            <td class="px-6 py-4">2025-01-01</td>
            <td class="px-6 py-4">R$ 7,300.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
            </div>
        </div>
    </div>
</template>

<script>
import sideBarMenu from "../../components/sideBarMenu.vue";
import hamburguerMenu from "../../components/hamburguerMenu.vue";

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