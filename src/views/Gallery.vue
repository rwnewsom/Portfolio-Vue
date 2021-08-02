<template>

 <div class="image-container">

 
    <div class="pic">
      
        <img img class="d-block w-100" src="../assets/Brasserie_Entrance.jpg" alt="Entrance to brasserie with staircase" style="width:100%">
        <div class="caption">
          <p>Djibouti: Entrance to local brasserie</p>
        </div>
      
    </div>
 

  
    <div class="pic">
      
        <img class="d-block w-100" src="../assets/Daily_Specials.jpg" alt="Chalkboard of daily specials" style="width:100%">
        <div class="caption">
          <p>Djibouti: Brasserie daily specials</p>
        </div>
      
    </div>
 
  
    <div class="pic">
      
        <img class="d-block w-100" src="../assets/Hill.jpg" alt="Rocky hill with clouds" style="width:100%">
        <div class="caption">
          <p>Djibouti: An inland hill</p>
        </div>
      
    </div>
 

  
    <div class="pic">
      
        <img class="d-block w-100" src="../assets/Kempenski_Pool.jpg" alt="Infinity Pool at the Kempenski Hotel" style="width:100%">
        <div class="caption">
          <p>Djibouti: The infinity pool at the Kempenski Hotel</p>
        </div>
      
    </div>
 

  
    <div class="pic">
      
        <img class="d-block w-100" src="../assets/Ships_Terminal.jpg" alt="Djibouti: View of cargo ships from the beach" style="width:100%">
        <div class="caption">
          <p>Djibouti: Cargo ships and terminal</p>
        </div>
      
    </div>
  

   
    <div class="pic">
      
        <img class="d-block w-100" src="../assets/Sheraton_Sunset.jpg" alt="Djibouti: View of the ocean after sunset" style="width:100%">
        <div class="caption">
          <p>Djibouti: The Sheraton Hotel after sunset</p>
        </div>
      
    </div>

     <div class="pic">
      
        <img class="d-block w-100" src="../assets/cedarfalls.jpg" alt="Ohio: Waterfall in Hocking Hills" style="width:100%">
        <div class="caption">
          <p>Hocking Hills, Ohio: Cedar Falls</p>
        </div>
      
    </div>
  


</div>

</template>

<script>
export default {

}
</script>

<style lang="scss">

@import "../styles/colors.scss";

.image-container{
    box-sizing: border-box;
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    overflow: hidden;
    border: 1px solid black;
     
    
}

.pic :first-child {
    padding-top: 10px;
}

.pic {
    width: 80%;
    height: auto;
}



.pic img {
    border-radius: 25px;
    padding: 0;
    box-shadow: 5px 5px $accentDark;
}




</style>