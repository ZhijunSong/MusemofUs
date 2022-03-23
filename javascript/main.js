
let urls=[
    'map.html',
    'location2.html',
    'location3.html'
]



var app1 = new Vue({
    el:".pins",
    data:{
      counter:0,
      url:`${urls[0]}`,
      isHidden: true
    },
    methods:{
        increment() {
            // update component state
            this.counter+=1;
        },
        enterPage(){
            // this.url =urls[this.counter];
        }
        
    }

})


