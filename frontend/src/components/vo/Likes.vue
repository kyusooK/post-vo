<template>
    <div style="margin: 0 -15px 0 -15px;">
        <v-card-title>
            {{label}}
        </v-card-title>
        <div v-if="editMode" style="margin-top:-20px;">
            <v-btn style=" margin-left: 15px;" v-model="value.isliked" small icon>
                <v-icon style="color:black;" >mdi-heart-outline</v-icon>
            </v-btn>
        </div>
        <div v-else style="margin-top:-20px;">
            <v-btn style=" margin-left: 15px;" v-if="!value.isliked" v-model="value.isliked" @click="toggleLike()" small icon>
                <v-icon style="color:black;" >mdi-heart-outline</v-icon>
            </v-btn>
            <v-btn v-else v-model="value.isliked" @click="toggleLike()" small icon>
                <v-icon style="color: red;" >mdi-heart</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
    
    export default {
        name:"Likes",
        props: {
            editMode: Boolean,
            value : Object,
            label : String,
        },
        created(){
            if(!this.value) {
                    this.value = {
                    'isLiked': false,
                }
            }
        },
        watch: {
        },
        methods: {
            toggleLike(){
                this.value.isLiked = !this.value.isLiked
            }
        }
    }
</script>

<style>
</style>