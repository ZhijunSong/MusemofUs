
let urls=[
    'location1.html',
    'location2.html',
    'location3.html'
]



var app1 = new Vue({
    el:".pins",
    data:{
    
    counter:0,
    url1:`${urls[0]}`,
    url2:`${urls[1]}`,
    url3:`${urls[2]}`,
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