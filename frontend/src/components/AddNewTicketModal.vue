<template>
    <div class="ct-modal ct-fixed ct-top-0 ct-left-0 ct-flex ct-items-center ct-justify-center" >
        <div class="ct-modal-overlay ct-absolute ct-w-screen ct-h-screen ct-bg-gray-800 ct-opacity-50"></div>
        <div class="ct-form ct-bg-white ct-p-6 ct-z-50 ct-rounded ct-shadow-lg">
            <div class="ct-flex ct-justify-between ct-items-center ct-mb-10">
               <h1 class="ct-text-2xl ct-font-bold">Add New Ticket</h1>
               <div class="ct-cursor-pointer ">
                    <button class="" @click="TogglePopup"><img src="@/assets/closeicon.svg" alt="Close btn" class="ct-w-4"/></button>
               </div>
            </div>
            <form>
                <div class="ct-mb-8">
                    <p class="ct-font-bold ct-mb-3">Ticket Name</p>
                    <input type="text" class="ct-w-full ct-h-12 ct-px-2 ct-border ct-border-gray-500 ct-rounded ct-shadow focus:ct-outline-none" name="ticketName" v-model="postTicket.ticketName">
                </div>
                <div class="ct-mb-8">
                    <p class="ct-font-bold ct-mb-3">Description</p>
                    <input type="text" class="ct-w-full ct-h-12 ct-px-2 ct-border ct-border-gray-500 ct-rounded ct-shadow  focus:ct-outline-none" name="ticketDes" v-model="postTicket.ticketDes">
                </div>
                <div class="ct-mb-8">
                    <p class="ct-font-bold ct-mb-3">Commit Link</p>
                    <input type="text" class="ct-w-full ct-h-12 ct-px-2 ct-border ct-border-gray-500 ct-rounded ct-shadow  focus:ct-outline-none" name="commitLink" v-model="postTicket.commitLink">
                </div>
                <div class="ct-mb-8">
                    <p class="ct-font-bold ct-mb-3">Text Link</p>
                    <input type="text" class="ct-w-full ct-h-12 ct-px-2 ct-border ct-border-gray-500 ct-rounded ct-shadow  focus:ct-outline-none" name="textLink" v-model="postTicket.textLink">
                </div>                    
                <div class="ct-cursor-pointer ct-flex ct-justify-end ct-mt-4">
                    <button type="submit" class="ct-w-40 ct-px-6 ct-py-4 ct-bg-green-500 hover:ct-bg-green-400 ct-rounded ct-text-white" @click.prevent="AddTicketMethod">Add Ticket</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import {mapActions} from "vuex"
    export default {
        name: 'AddNewTicket',
        props: ['TogglePopup'],
         data(){
            return{
            postTicket:{
            ticketName:"",
            ticketDes:"",
            commitLink:"",
            textLink:""
                }
            }
        },
        methods:{
            ...mapActions(["addTicket"]),
            AddTicketMethod(){
                this.addTicket(this. postTicket)
            }
        }
    }
</script>
<style scoped>
.ct-modal {
  transition: opacity 0.25s ease;
  width: 100vw;
  height: 100vh;
}
.ct-form {
  width: 500px;
}
</style>