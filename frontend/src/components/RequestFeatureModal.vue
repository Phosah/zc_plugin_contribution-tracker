<template>
    <div class="ct-modal ct-fixed ct-z-50 ct-top-0 ct-left-0 ct-flex ct-items-center ct-justify-center" :class="{'ct-opacity-0': this.$store.state.addRequestFeatureActive,'ct-pointer-events-none': this.$store.state.addRequestFeatureActive, 'ct-modal-active': this.$store.state.addRequestFeatureActive}">
        <div class="ct-modal-overlay ct-absolute ct-w-screen ct-h-screen ct-bg-gray-800 ct-opacity-50"></div>
        <!-- Form Card -->
        <div class="ct-p-6 ct-card ct-bg-white ct-z-50 ct-rounded ct-shadow-lg">
            <div class="ct-flex ct-justify-between ct-align-items ct-mb-10">
               <p class="ct-text-2xl ct-font-bold">Request Feature</p>
               <div class="ct-cursor-pointer ct-flex" @click="modalControl">
                   <img src="@/assets/closeicon.svg" alt="" class="ct-w-4 ct-h-4 ct-mt-2"/>
               </div>
            </div>
            <!-- Request form start -->
            <form class="ct-form ct-flex ct-flex-col" @submit.prevent="addRequestedFeatures()">
                <div class="ct-flex-grow">
                    <div class="ct-flex ct-flex-col ct-mb-8">
                        <label class="ct-font-bold ct-mb-3" for="username">Username</label>
                        <input type="text" name="username" class="ct-h-12 ct-px-2 ct-shadow ct-appearance-none ct-w-full ct-bg-white ct-text-gray-700 ct-border ct-border-gray-500 ct-rounded focus:ct-outline-none ct-focus:bg-white" id="username" v-model="data.userName">
                    </div>
                    <div class="ct-flex ct-flex-col ct-mb-8">
                        <label class="ct-font-bold ct-mb-3" for="requestname">Name of Request</label>
                        <input type="text" name="requestname" class="ct-h-12 ct-px-2 ct-shadow ct-appearance-none ct-w-full ct-bg-white ct-text-gray-700 ct-border ct-border-gray-500 ct-rounded focus:ct-outline-none ct-focus:bg-white" id="requestname" v-model="data.requestName">
                    </div>
                    <div>
                        <div class="ct-mb-3">
                            <label class="ct-font-bold" for="votingtime">Allocated time for voting </label><span>(in minutes)</span>
                        </div>
                        <input type="text" name="votingtime" class="ct-h-12 ct-px-2 ct-shadow ct-appearance-none ct-w-full ct-bg-white ct-text-gray-700 ct-border ct-border-gray-500 ct-rounded focus:ct-outline-none ct-focus:bg-white" id="votingtime" v-model="data.votingTime">
                    </div>
                </div>
                <div class="ct-cursor-pointer ct-flex ct-justify-end ct-mt-4">
                    <button type="submit" class="ct-w-40 ct-px-6 ct-py-4 ct-bg-green-500 hover:ct-bg-green-400 ct-rounded ct-text-white">Request Feature</button>
                </div>
            </form>
        <!-- Request form end -->
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        name: 'RequestFeatureModal',
        data() {
            return {
                data: {
                userName: '',
                votingTime: '',
                requestName: '',
                }
            }
        },
        methods: {
            ...mapActions([
                'addRequestedFeatures'
            ]),
            modalControl(){
                this.$store.commit('toggleRequestModal');
            },
            async addRequestedFeatures() {
                try {
                    let user_name = this.data.userName
                    let voting_time = this.data.votingTime
                    let request_name = this.data.requestName
                    const payload = {
                        user_name,
                        voting_time,
                        request_name
                    }
                    this.addRequestedFeatures(payload)
                } catch (err) {
                    console.log(err)
                }
            }
        },
        computed:{
        },
    }
</script>

<style scoped>
.ct-modal {
    transition: opacity 0.25s ease;
    width: 100vw;
    height: 100vh;
}
.ct-card {
    width: 500px;
}
.ct-form {
    height: 500px;
}
body.ct-modal-active {
    overflow-x: hidden;
    overflow-y: visible !important;
}

button{
    width: 13rem !important;
}

input{
    border-color: #A1A1A1 !important;
}

</style>