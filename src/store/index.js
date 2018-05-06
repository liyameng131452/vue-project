import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
function readData(){
  var localstr=localStorage.getItem('localcart');
  if(localstr==null || localstr.trim()==""){
    return [];
  }else{
    return JSON.parse(localstr);
  }
};
function writeData(cartinfo){
  localStorage.setItem('localcart',JSON.stringify(cartinfo));
}
export default new Vuex.Store({
  state: {
    carts:readData(),
  },
  getters:{
    totalCount(state){
      var sum=0;
      state.carts.forEach(v=>{
        sum+=v.count;
      });
      return sum;
    },
    getcartids(state){
      var temp=state.carts.map(v=>{
        return v.id
      });
      var idstr=temp.join(',');
      return idstr;
    },
   getcountbyid:function(state){
     return function(id){
       var temp=state.carts.find(v=>{
         return v.id==id
       });
       return temp.count;
     }
   }
  },
  mutations: {
    addcarts(state,cartinfo){
      // console.log(cartinfo);
      // state.carts.push(cartinfo);
      let temp=state.carts.find(v=>{
        return v.id==cartinfo.id;
      });
      if(temp){
        temp.count+=cartinfo.count;
      }else{
        state.carts.push(cartinfo);
      }
      writeData(state.carts);
    },
    updata(state,cartinfo){
      cartinfo.forEach(v=>{
        let cart=state.carts.find(e=>{
          return e.id==v.id
        });
        cart.count=v.count
      });
      writeData(state.carts);
      
    }
  }
})