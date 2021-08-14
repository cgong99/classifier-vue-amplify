<template>
  <div class="MessageBox">
      <textarea id="message" rows="4" cols="50" v-model="message"/>
       <button @click="submitText">submit</button>
  </div>
  <div v-if="this.loading">Loading</div>
  <div class="label" v-if="response">{{names[response.predicted_label[0]]}}</div>
  

</template>

<script>
import axios from 'axios';
import {mapState, mapMutations} from 'vuex'



export default {
    data () {
        return {
            message : "input text",
            //response: "",
            label: "",
            prob: [],
            loading: false
        }
    },
    computed : {
        ...mapState(['response', 'names'])
    },
    methods: {
        submitText() {
            const headers = { 
                "X-Api-Key": ""
            };

            let data = {
                body: this.message
            }
            this.loading = true
            //const URL = 'https://7sf3luxwga.execute-api.us-east-1.amazonaws.com/Public/classify_digit'
            const URL = 'https://wtidywehxg.execute-api.us-east-1.amazonaws.com/Prod/classify_digit'
            axios.post(URL, data, {headers})
                .then((response) => {
                    console.log(response);
                    
                    this.updateResponse(response.data)
                    //this.response = JSON.stringify(response.data.predicted_label)
                    this.loading = false
                })
                .catch((error) =>{
                    console.log(error);
                });
        },

        ...mapMutations(['updateResponse'])
            
    },
        
    mounted() {

    }
        
}
</script>

<style>
  .MessageBox {
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
  textarea {
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
    width: 50%
  }
  .label {
    display: block;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0
  }
  button {
    display: block;
    margin: 20px auto 0;
    background-color:darkgray;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
  }
  button:hover {
      background-color:gray
      }
</style>