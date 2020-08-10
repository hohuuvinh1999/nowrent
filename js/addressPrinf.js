function loadAddress(){
    document.getElementById("loadDataAddress").innerHTML ='';
    for(let i = 0; i < city.length; i++) {
        var cityPrinf =`<div class="p-2" style="width: 100%;height: 45px;border-bottom: 1px solid #ffe8e8">
    <p class="font-weight-bold float-left"> `+city[i].name+`</p>
    <i class="fa fa-chevron-right float-right mt-1 color1" aria-hidden="true"></i>
  </div>`;
  document.getElementById("loadDataAddress").innerHTML +=cityPrinf; 
    }
}