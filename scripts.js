var products = [
  {
    photo: "img/big-mac.png",
    name: "Big Mac",
    price: 5.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/mc-chicken.png",
    name: "Mc Chicken",
    price: 4.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/double-cb.png",
    name: "Double Cheese Burger",
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/fries.png",
    name: "Fries",
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/nuggets.png",
    name: "Mc Nuggets",
    price: 3.49,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/salad.png",
    name: "Salad",
    price: 2.79,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/cola.png",
    name: "Coke",
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/lipton.png",
    name: "Ice Tea",
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/water.png",
    name: "Water",
    price: 1.49,
    active: false,
    quantity: 1,
  },
];

var members = [
  {
    fname: "John",
    lname: "Smith",
    instrument: "Guitar",
  },
  {
    fname: "Parker",
    lname: "Smith",
    instrument: "Bass",
  },

];

//create a variable to hold the data property of the Vue instance
const selfServiceMachine = {
  data() {
    return {
      message: "Welcome to McDonald's",
      products: products,
    };
  },
  methods:{
    total: function(){
      let total = 0;
      this.products.forEach((item)=>{
        if(item.active){
          total += item.price * item.quantity;
        }
      });
      return total.toFixed(2);

    }
  }
};

const bandExample = {
  data(){
    return{
      members: members,
      newMember:{
        fname: "Kerry",
        lname: "Johnson",
        instrument: "Drums"
      }
    }
  },
  methods:{
      addMember: function(){
          if(this.newMember.fname && this.newMember.lname && this.newMember.instrument){  
          this.members.push(this.newMember);
          this.newMember = {};
        }else{
          alert("Please fill all the fields");
        }
    }
  }
};

Vue.createApp(bandExample).mount("#app");
