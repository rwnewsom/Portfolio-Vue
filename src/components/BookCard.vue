<template>
    <div class="card" v-bind:class="{ read: book.read }" v-on:click="goToDetails(book)">
        <h2 class="book-title">{{ book.title }}</h2>
        <img v-if="book.isbn" v-bind:src="'http://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg'" />
        <h3 class="book-author">{{ book.author }}</h3>
    </div>      
</template>

<script>
export default {
    name: 'book-card',
    props: {
        book: Object,
        enableAdd: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        
        goToDetails(book){
            this.$router.push({name:'book', params: {id: book.isbn}}); 
        }
    }
}
</script>

<style>

.card {
    border: 2px solid black;
    border-radius: 10px;
    width: 250px;
    height: 500px;
    margin: 20px;
    background-color: #F2E9E4;
    color: #4A4E69;    
}

.card.read {
    background-color: lightgray;
}

.card .book-title {
    font-size: 1.5rem;
}

.card .book-author {
    font-size: 1rem;
}

</style>