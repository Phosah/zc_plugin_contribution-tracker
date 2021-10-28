<template>
    <div class="ct-modal ct-fixed ct-z-50 ct-top-0 ct-left-0 ct-flex ct-items-center ct-justify-center" :class="{'ct-opacity-0': this.$store.state.addUserModalActive,'ct-pointer-events-none': this.$store.state.addUserModalActive, 'ct-modal-active': this.$store.state.addUserModalActive}">
        <div class="ct-modal-overlay ct-absolute ct-w-screen ct-h-screen ct-bg-gray-800 ct-opacity-50"></div>
        <div class="ct-card ct-p-6 ct-bg-white ct-z-50 ct-rounded ct-shadow-lg">
            <div class="ct-flex ct-justify-between ct-align-items ct-mb-10">
               <p class="ct-flex ct-justify-start ct-text-2xl ct-font-bold">Add User</p>
               <div class="ct-cursor-pointer ct-flex" @click="modalControl">
                   <img src="@/assets/closeicon.svg" alt="" class="ct-w-4"/>
               </div>
            </div>
            <form class="ct-form ct-flex ct-flex-col" @submit.prevent="AddUser()">
                <div class="ct-flex-grow">
                    <div class="ct-flex ct-flex-col ct-mb-8">
                        <label class="ct-font-bold ct-mb-3" for="username">Username</label>
                        <input type="text" name="username" class="ct-h-12 ct-px-2 ct-shadow ct-appearance-none ct-w-full ct-bg-white ct-text-gray-700 ct-border ct-border-gray-500 ct-rounded focus:ct-outline-none ct-focus:bg-white" id="username" v-model="data.username">
                    </div>
                    <div class="ct-mb-8">
                        <div class="ct-mb-3">
                            <label class="ct-font-bold" for="voting">Voting Weight </label><span>(between 1 & 10)</span>
                        </div>
                        <input type="text" name="votingweight" class="ct-h-12 ct-px-2 ct-shadow ct-appearance-none ct-w-full ct-bg-white ct-text-gray-700 ct-border ct-border-gray-500 ct-rounded focus:ct-outline-none ct-focus:bg-white" id="votingweight" v-model="data.votingweight">
                    </div>
                </div>
                <div class="ct-cursor-pointer ct-flex ct-justify-end">
                    <button type="submit" class="ct-w-40 ct-px-6 ct-py-4 ct-bg-green-500 hover:ct-bg-green-400 ct-rounded ct-text-white">Add Voter</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        name: 'AddNewVoter',
        data() {
          return {
            data: {
              username: '',
              votingweight: ''
            }
          }
        },
        methods: {
            ...mapActions([
                'addUser'
            ]),
            modalControl(){
                this.$store.commit('toggleUserModal');
            },
            async AddUser() {
                try {
                    let user_name = this.data.username
                    let voting_weight = this.data.votingweight
                    const payload = {
                        user_name,
                        voting_weight
                    }
                    this.addUser(payload)
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
</style>