let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let OilyPage=document.querySelector('#OilyPage');
let NormalPage=document.querySelector('#NormalPage');
let CombinationPage=document.querySelector('#CombinationPage');
let SensitivePage=document.querySelector('#SensitivePage');
let DryPage=document.querySelector('#DryPage');
let AccessoriesPage=document.querySelector('#AccessoriesPage');


let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let AllSkinDiv=document.getElementById("AllSkinType");




let showoily=document.querySelector('#showoily');
let ListOily=document.getElementById("listOilyPage");

let shownormal=document.querySelector('#shownormal');
let ListNormal=document.getElementById("listNormalPage");

let showcombination=document.querySelector('#showcombination');
let ListCombination=document.getElementById("listCombinationPage");

let showsensitive=document.querySelector('#showsensitive');
let ListSensitive=document.getElementById("listSensitivePage");

let showdry=document.querySelector('#showdry');
let ListDry=document.getElementById("listDryPage");


let showaccessories=document.querySelector('#showaccessories');
let ListAccessories=document.getElementById("listAccessoriesPage");









openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


let products=[
    {id:1,
        name:'Size-M',
        image:'oily skin/cleanser/m1.png',
        price: 29000
       
    },
   
    {id:2,
        name:'Size-L',
        image:'oily skin/cleanser/m2.png',
        price: 26000

       
    },
    {id:3,
        name:'Size-M',
        image:'oily skin/cleanser/m3.png',
        price: 28000
       
    },
    {id:4,
        name:'Size-M',
        image:'oily skin/cleanser/m41.png',
        price: 22000
       
    },
    {id:5,
        name:'Size-M',
        image:'oily skin/cleanser/m51.png',
        price: 31500
       
    },
    {id:6,
        name:'Size-M',
        image:'oily skin/toner/m6.png',
        price: 33500
       
    },
   
    {id:7,
        name:'Size-M',
        image:'oily skin/toner/m77.png',
        price: 35000
       
    },
    {id:8,
        name:'Size-M',
        image:'oily skin/toner/m44.png',
        price: 25000
       
    },
    {id:9,
        name:'Size-M',
        image:'oily skin/toner/m12.png',
        price: 25000
       
    },
    {id:10,
        name:'Size-M',
        image:'oily skin/toner/m11.png',
        price:  25000
       
    },
    {id:11,
        name:'Size-M',
        image:'oily skin/serum/',
        price: 25000
       
    },
    {id:12,
        name:'Size-M',
        image:'oily skin/serum/',
        price: 25000
       
    },
    {id:13,
        name:'iUNIK',
        image:'oily skin/serum/',
        price:  25000
       
    },
    {id:14,
        name:'Size-M ',
        image:'oily skin/serum/',
        price: 25000
       
    },
    {id:15,
        name:'Size-M',
        image:'oily skin/serum/',
        price:  25000
       
    },
  
    {id:16,
        name:'Size-M',
        image:'oily skin/moisturizer/',
        price: 25000
       
    },
    {id:17,
        name:'Size-M',
        image:'oily skin/moisturizer/',
        price:  27000
       
    },
    {id:18,
        name:'Size-M',
        image:'oily skin/moisturizer/',
        price:30000
       
    },
    {id:19,
        name:'Size-M',
        image:'oily skin/moisturizer/',
        price: 17500
       
    },
    {id:20,
        name:'Size-M',
        image:'oily skin/moisturizer/',
        price: 13000
       
    },
    {id:21,
        name:'Size-M',
        image:'oily skin/sunscreen/',
        price: 1100
       
    },
    {id:22,
        name:'Size-M',
        image:'oily skin/sunscreen/',
        price: 22000
       
    },



    {id:23,
        name:'Size-M',
        image:'oily skin/sunscreen/',
        price: 28000
       
    },
    {id:24,
        name:'Size-M',
        image:'oily skin/sunscreen/',
        price: 32000
       
    },
    {id:25,
        name:'Size-M',
        image:'oily skin/sunscreen/',
        price: 30000
       
    },
    {id:26,
       name:'Size-M',
        image:'oily skin/clay mask/',
        price: 29000
       
    },
    {id:27,
           name:'Size-M',
        image:'oily skin/clay mask/',
        price: 24000
       
    }, 
     {id:28,
           name:'Size-M',
        image:'oily skin/clay mask/',
        price: 29500
       
    },
    {id:29,
        name:'Size-M',
        image:'oily skin/clay mask/',
        price: 35000
       
    },
    {id:30,
        name:'Size-M',
        image:'oily skin/clay mask/',
        price: 30000
       
    },



    {id:31,
        name:'Size-M',
        image:'normal skin/ShanClothes/s1.png',
        price:120000
  },
  
  {id:32,
        name:'Size-M',
        image:'normal skin/ShanClothes/s2.png',
        price:130000
  },
  
  {id:33,
         name:'Size-M',
        image:'normal skin/ShanClothes/s3.png',
        price:120000
  },
  
  {id:34,
          name:'Size-M',
        image:'normal skin/ShanClothes/s4.png',
        price:110000
  },
  
  {id:35,
          name:'Size-M',
        image:'normal skin/ShanClothes/s51.png',
        price:120000
  },
  
  
  
  {id:36,
         name:'Size-M',
        image:'normal skin/ShanClothes/s52.png',
        price:130000
  },
  
  {id:37,
          name:'Size-M',
        image:'normal skin/ShanClothes/s7.png',
        price:140000
  },
  
  {id:38,
         name:'Size-M',
        image:'normal skin/ShanClothes/s8.png',
        price: 90000
  },
  
  {id:39,
   name:'Size-M',
        image:'normal skin/ShanClothes/s9.png',
        price:70000
  },
  
  {id:40,
        name:'Size-M',
        image:'normal skin/ShanClothes/ss55.png',
        price:70000
  },
  
  
  {id:41,
        name:'Size-M',
        image:'normal skin/ShanClothes/ss3.png',
        price:70000
  },
  
  {id:42,
         name:'Size-M',
        image:'normal skin/ShanClothes/ss5.png',
        price:80000
  },
  
  {id:43,
   name:'Size-M',
        image:'normal skin/ShanClothes/ss6.png',
        price:80000
  },
  
  {id:44,
     name:'Size-M',
        image:'normal skin/ShanClothes/ss7.png',
        price:70000
  },
  
  {id:45,
          name:'Size-M',
        image:'normal skin/ShanClothes/sc1.png',
        price:70000
  },
  
  
  {id:46,
        name:'Size-M',
        image:'normal skin/ShanClothes/ss8.png',
        price:70000
  },
  
  {id:47,
         name:'Size-M',
        image:'normal skin/ShanClothes/ss9.png',
        price: 70000
  },
  
  {id:48,
     name:'Size-M',
        image:'normal skin/ShanClothes/ss12.png',
        price:70000
  },
  
  {id:49,
           name:'Size-M',
        image:'normal skin/moisture/ss6.png',
        price:19000
  },
  
  {id:50,
     name:'Size-M',
        image:'normal skin/moisture/ss7.png',
        price:8500
  },
  
  
  {id:51,
       name:'Size-M',
        image:'normal skin/sunscreen/',
        price:26000
  },
  
  {id:52,
       name:'Size-M',
        image:'normal skin/sunscreen/',
        price:33000
  },
  
  {id:53,
          name:'Size-M',
        image:'normal skin/sunscreen/',
        price:16900
  },
  
  {id:54,
       name:'Size-M',
        image:'normal skin/sunscreen/',
        price:62000
  },
  
  {id:55,
        name:'Size-M',
        image:'normal skin/sunscreen/',
        price:8500
  },
  
  
  {id:56,
      name:'Size-M',
        image:'normal skin/clay mask/',
        price:71000
  },
  
  {id:57,
         name:'Size-M',
        image:'normal skin/clay mask/',
        price:89000
  },
  
  {id:58,
       name:'Size-M',
        image:'normal skin/clay mask/',
        price:40000
  },
  
  {id:59,
          name:'Size-M',
        image:'normal skin/clay mask/',
        price:75000
  },
  
  {id:60,
         name:'Size-M',
        image:'normal skin/clay mask/',
        price:18500
  },

  {id:61,
      name:'Size-M',
    image:'Combination/Cleansing Water/b1.png',
    price:15000
},
{id:62,
       name:'Size-M',
    image:'Combination/Cleansing Water/b2.png',
    price:19800
},
{id:63,
      name:'Size-M',
    image:'Combination/Cleansing Water/b4.png',
    price:8600
},
{id:64,
   name:'Size-M',
    image:'Combination/Cleansing Water/b3.png',
    price:13100
},
{id:65,
    name:'Size-M',
    image:'Combination/Cleansing Water/b5.png',
    price:39500
},
{id:66,
     name:'Size-M',
    image:'Combination/Cleanser/b6.png',
    price:17500
},
{id:67,
       name:'Size-M',
    image:'Combination/Cleanser/b7.png',
    price:25000
},
{id:68,
   name:'Size-M',
    image:'Combination/Cleanser/b88.png',
    price:71000
},
{id:69,
      name:'Size-M',
    image:'Combination/Cleanser/b9.png',
    price:19400
},
{id:70,
      name:'Size-M',
    image:'Combination/Cleanser/b10.png',
    price:38000
},
{id:71,
     name:'Size-M',
    image:'Combination/Moisturizer/b11.png',
    price:19400
},
{id:72,
    name:'Size-M',
    image:'Combination/Moisturizer/b12.png',
    price:11000
},
{id:73,
     name:'Size-M',
    image:'Combination/Moisturizer/b13.png',
    price:42000
},
{id:74,
    name:'Size-M',
    image:'Combination/Moisturizer/b14.png',
    price:38000
},
{id:75,
     name:'Size-M',
    image:'Combination/Moisturizer/b15',
    price:8400
},
{id:76,
    name:'Size-M',
    image:'Combination/Serum/',
    price:22800
},
{id:77,
  name:'Size-M',
    image:'Combination/Serum/',
    price:40000
},
{id:78,
      name:'Size-M',
    image:'Combination/Serum/',
    price:60000
},
{id:79,
      name:'Size-M',
    image:'Combination/Serum/',
    price:31000
},
{id:80,
     name:'Size-M',
    image:'Combination/Serum/',
    price:95000
},
{id:81,
   name:'Size-M',
    image:'Combination/Sunscreen/',
    price:29400
},
{id:82,
      name:'Size-M',
    image:'Combination/Sunscreen/',
    price:60000
},

{id:83,
      name:'Size-M',
    image:'Combination/Sunscreen/',
    price:19800
},
{id:84,
   name:'Size-M',
    image:'Combination/Sunscreen/',
    price:32000
},
{id:85,
       name:'Size-M',
    image:'Combination/Sunscreen/',
    price:6000
},
{id:86,
    name:'Klairs',
    image:'Combination/Toner/',
    price:32000
},

{id:87,
      name:'Size-M',
    image:'Combination/Toner/',
    price:60000
},
{id:88,
       name:'Size-M',
    image:'Combination/Toner/',
    price:31000
},
{id:89,
      name:'Size-M',
    image:'Combination/Toner/',
    price:11500
},
{id:90,
     name:'Size-M',
    image:'Combination/Toner/',
    price:34000
},
  {id:91,
      name:'Size-M',
    image:'sensitive skin/Topseller/b6.png',
    price:28000
},
{id:92,
     name:'Size-M',
    image:'sensitive skin/Topseller/b7.png',
    price:15000
},
{id:93,
       name:'Size-M',
    image:'sensitive skin/Topseller/b9.png',
    price:27000
},
{id:94,
      name:'Size-M',
    image:'sensitive skin/Topseller/s1.png',
    price:39000
},
{id:95,
       name:'Size-M',
    image:'sensitive skin/Topseller/s2.png',
    price:39000
},

{id:96,
       name:'Size-M',
    image:'sensitive skin/Topseller/s3.png',
    price:23000
},
{id:97,
     name:'Size-M',
    image:'sensitive skin/Topseller/ss3.png',
    price:7600
},
{id:98,
      name:'Size-M',
    image:'sensitive skin/Topseller/ss5.png',
    price:100000
},
{id:99,
    name:'Size-M',
    image:'sensitive skin/Topseller/ss6.png',
    price:20000
},
{id:100,
      name:'Size-M',
    image:'sensitive skin/Topseller/m1.png',
    price:23000
},

{id:101,
     name:'Size-M',
    image:'sensitive skin/Topseller/m2.png',
    price:96000
},
{id:102,
    name:'Size-M',
    image:'sensitive skin/Topseller/m3.png',
    price:81000
},
{id:103,
     name:'Size-M',
    image:'sensitive skin/Topseller/m41.png',
    price:47000
},
{id:104,
     name:'Size-M',
    image:'sensitive skin/Topseller/',
    price:108000
},
{id:105,
       name:'Size-M',
    image:'sensitive skin/Topseller/',
    price:104000
},

{id:106,   name:'Size-M',
    image:'sensitive skin/moisturizer/',
    price:89000
},
{id:107,
      name:'Size-M',
    image:'sensitive skin/Topseller/',
    price:66000
},
{id:108,
      name:'Size-M',
    image:'sensitive skin/Topseller/',
    price:54000
},
{id:109,
    name:'Simple',
    image:'sensitive skin/Topseller/',
    price:45000
},
{id:110,
     name:'Size-M',
    image:'sensitive skin/Topseller/',
    price:47000
},

{id:111,
      name:'Size-M',
    image:'sensitive skin/Topseller/',
    price:99000
},
{id:112,
     name:'Size-M',
    image:'sensitive skin/Topseller/',
    price:27000
},
{id:113,
     name:'Size-M',
    image:'sensitive skin/Topseller/',
    price:94000
},
{id:114,
     name:'Size-M',
    image:'sensitive skin/Topseller/',
    price:25000
},
{id:115,
   name:'Size-M',
    image:'sensitive skin/Topseller',
    price:27000
},

{id:116,
     name:'Size-M',
    image:'sensitive skin/Topseller/',
    price:15000
},
{id:117,
     name:'Size-M',
    image:'sensitive skin/Topseller/',
    price:41000
},
{id:118,
      name:'Size-M',
    image:'sensitive skin/Topseller/',
    price:64000
},
{id:119,
   name:'Size-M',
    image:'sensitive skin/Topseller/',
    price:143000
},
{id:120,
       name:'Size-M',
    image:'sensitive skin/Topseller/',
    price:28000
},
{id:121,
      name:'Size-M',
    image:'Dry/Discount/d1.png',
    price:16000
},

{id:122,
      name:'Size-M',
    image:'Dry/Discount/d3.png',
    price:22000
},

{id:123,
     name:'Size-M',
    image:'Dry/Discount/d4.png',
    price:33000
},

{id:124,
      name:'Size-M',
    image:'Dry/Discount/d6.png',
    price:23500
},

{id:125,
     name:'Size-M',
    image:'Dry/Discount/m22.png',
    price:16000
},

{id:126,
     name:'Size-M',
    image:'Discount/b3.png',
    price:37000
},

{id:127,
      name:'Size-M',
    image:'Dry/Discount/.png',
    price:70000
},

{id:128,
   name:'Size-M',
    image:'Dry/Cleanser/',
    price:35000
},
{id:129,
      name:'Size-M',
    image:'Dry/Cleanser/',
    price:55000
},
{id:130,
       name:'Size-M',
    image:'Dry/Cleanser/',
    price:70000
},
{id:131,
      name:'Size-M',
    image:'Dry/Moisturizer/',
    price:25000
},
{id:132,
       name:'Size-M',
    image:'Dry/Moisturizer/',
    price:30000
},
{id:133,
  name:'Size-M',
    image:'Dry/Moisturizer/',
    price:30000
},
{id:134,
   name:'Size-M',
    image:'Dry/Moisturizer/',
    price:40000
},
{id:135,
   name:'Size-M',
    image:'Dry/Moisturizer/',
    price:70000
},
{id:136,
    name:'Size-M',
    image:'Dry/serum/',
    price:30000
},

{id:137,
     name:'Size-M',
    image:'Dry/serum/',
    price:43000
},

{id:138,
   name:'Size-M',
    image:'Dry/serum/',
    price:33000
},

{id:139,
    name:'Size-M',
    image:'Dry/serum/',
    price:35000
},

{id:140,
     name:'Size-M',
    image:'Dry/serum/',
    price:30000
},

{id:141,
   name:'Size-M',
    image:'Dry/Sunscreen/',
    price:46500
},

{id:142,
   name:'Size-M',
    image:'Dry/Sunscreen/',
    price:30000
},

{id:143,
    name:'Size-M',
    image:'Dry/Sunscreen/',
    price:41500
},

{id:144,
    name:'Size-M',
    image:'Dry/Sunscreen/',
    price:30000
},

{id:145,
   name:'Size-M',
    image:'Dry/Sunscreen/',
    price:22000
},


{id:146,
     name:'Size-M',
    image:'Dry/Toner/',
    price:35500
},

{id:147,
     name:'Size-M',
    image:'Dry/Toner/',
    price:30000
},

{id:148,
    name:'Size-M',
    image:'Dry/Toner/',
    price:30000
},

{id:149,
   name:'Size-M',
    image:'Dry/Toner/',
    price:14000
},

{id:150,
     name:'Size-M',
    image:'Dry/Toner/',
    price:35000

},

{id:151,
     name:'Dragon Bracelet',
    image:'accessories/a1.png',
    price:22000
},
{id:152,
    name:'Dragon Bracelet',
    image:'accessories/a2.png',
    price:20000
},
{id:153,
    name:'Dragon Bracelet',
    image:'accessories/a3.png',
    price:20000
},
{id:154,
     name:'Dragon Bracelet',
    image:'accessories/a44.png',
    price:20000

},
{id:155,
    name:'Earings',
    image:'accessories/a4.png',
    price:15000
},
{id:156,
   name:'Earings',
    image:'accessories/a5.png',
    price:15000
},
{id:157,
    name:'Earings',
    image:'accessories/a6.png',
    price:15000

},
{id:158,
   name:'Bracelet',
    image:'accessories/a20.png',
    price:2000
},
{id:159,
   name:'Bracelet',
    image:'accessories/a21.png',
    price:3000
},
{id:160,
    name:'Bracelet',
    image:'accessories/a22.png',
    price:2500

},
{id:161,
 name:'Shan Clock',
    image:'accessories/a15.png',
    price:60000
},
{id:162,
   name:'Shan Clock',
    image:'accessories/a16.png',
    price:60000
},
{id:163,
    name:'Shan Clock',
    image:'accessories/a17.png',
    price:60000

},
{id:164,
 name:'Shan Belt',
    image:'accessories/a18.png',
    price:15000
},
{id:165,
    name:'Dragon Hairpin',
    image:'accessories/a19.png',
    price:13000
},
{id:166,
   name:'Shan Bag',
    image:'accessories/a10.png',
    price:40000

},
{id:167,
    name:'Shan Bag',
    image:'accessories/a11.png',
    price:40000
},
{id:168,
    name:'Shan Bag',
    image:'accessories/a13.png',
    price:40000
},
{id:169,
    name:'Shan Bag',
    image:'accessories/a14.png',
    price:40000

},
{id:170,
    name:'Shan Bag',
    image:'accessories/a20.jpg',
    price:40000
},
{id:171,
    name:'Shan Bag',
    image:'accessories/a21.jpg',
    price:40000
},
{id:172,
     name:'Shan Bag',
    image:'accessories/a22.jpg',
    price:40000

},
{id:173,
      name:'Shan Bag',
    image:'accessories/a23.jpg',
    price:40000
},
{id:174,
       name:'Shan Bag',
    image:'accessories/a24.jpg',
    price:2000
},
{id:175,
   name:'Shan Bag',
    image:'accessories/a25.jpg',
    price:3000
},
{id:176,
   name:'Shan Bag',
    image:'accessories/',
    price:30000
},
{id:177,
       name:'Size-M',
    image:'accessories/',
    price:3000
},
{id:178,
    name:'Size-M',
    image:'accessories/',
    price:10000
},
{id:179,
     name:'Size-M',
    image:'accessories/',
    price:7000

},
{id:180,
   name:'Size-M',
    image:'accessories/',
    price:5000
},
{id:181,
   name:'Size-M',
    image:'accessories/',
    price:6000
},
{id:182,
   name:'Size-M',
    image:'accessories/',
    price:7000

},
{id:183,
     name:'Size-M',
    image:'accessories/',
    price:7000
},
{id:184,
   name:'Size-M',
    image:'accessories/',
    price:7000
},
{id:185,
   name:'Size-M',
    image:'accessories/',
    price:7000

},
{id:186,
    name:'Size-M',
    image:'accessories/',
    price:15000
},
{id:187,
      name:'Size-M',
    image:'accessories/',
    price:5000
},
{id:188,
      name:'Size-M',
    image:'accessories/',
    price:20000

},
{id:189,
      name:'Size-M',
    image:'accessories/',
    price:35000
},
{id:190,
       name:'Size-M',
    image:'accessories/',
    price:6000
},
{id:191,
     name:'Size-M',
    image:'accessories/',
    price:7000

},
{id:192,
     name:'Size-M',
    image:'accessories/',
    price:30000
},
{id:193,
      name:'Size-M',
    image:'accessories/',
    price:6000
},
{id:194,
      name:'Size-M',
    image:'accessories/',
    price:6000

},
{id:195,
      name:'Size-M',
    image:'accessories/',
    price:3000
},
{id:196,
   name:'Size-M',
    image:'accessories/',
    price:20000
},
{id:197,
    name:'Tomato blackhead Remover',
    image:'accessories/',
    price:15000

},



];


let filteredArray=[];
let listCards = [];
function initApp(){
    for(let i=0;i<30;i++){
        let newDiv = document.createElement('div');
       newDiv.classList.add('item');
      newDiv.innerHTML = `
      <img src="image/${products[i].image}">
      <div class="title">${products[i].name}</div>
            <div class="price">${products[i].price.toLocaleString()} MMK</div>
            <button onclick="addToCard(${i})">Order</button>
      `;
      OilyPage.appendChild(newDiv);
    }


    for(let i=30;i<60;i++){
        let newDiv= document.createElement('div');
       newDiv.classList.add('item');
      newDiv.innerHTML = `
      <img src="image/${products[i].image}">
      <div class="title">${products[i].name}</div>
            <div class="price">${products[i].price.toLocaleString()} MMK</div>
            <button onclick="addToCard(${i})">Order</button>
      `;
      NormalPage.appendChild(newDiv);
    }


    for(let i=60;i<90;i++){
        let newDiv= document.createElement('div');
       newDiv.classList.add('item');
      newDiv.innerHTML = `
      <img src="image/${products[i].image}">
      <div class="title">${products[i].name}</div>
            <div class="price">${products[i].price.toLocaleString()} MMK</div>
            <button onclick="addToCard(${i})">Order</button>
      `;
      CombinationPage.appendChild(newDiv);
    }

    for(let i=90;i<120;i++){
        let newDiv= document.createElement('div');
       newDiv.classList.add('item');
      newDiv.innerHTML = `
      <img src="image/${products[i].image}">
      <div class="title">${products[i].name}</div>
            <div class="price">${products[i].price.toLocaleString()} MMK</div>
            <button onclick="addToCard(${i})">Order</button>
      `;
      SensitivePage.appendChild(newDiv);
    }



    for(let i=120;i<150;i++){
        let newDiv= document.createElement('div');
       newDiv.classList.add('item');
      newDiv.innerHTML = `
      <img src="image/${products[i].image}">
      <div class="title">${products[i].name}</div>
            <div class="price">${products[i].price.toLocaleString()} MMK</div>
            <button onclick="addToCard(${i})">Order</button>
      `;
      DryPage.appendChild(newDiv);
    }


    for(let i=150;i<197;i++){
        
        
        
        
        
        let newDiv= document.createElement('div');
       newDiv.classList.add('item');
      newDiv.innerHTML = `
      <img src="image/${products[i].image}">
      <div class="title">${products[i].name}</div>
            <div class="price">${products[i].price.toLocaleString()} MMK</div>
            <button onclick="addToCard(${i})">Order</button>
      `;
      AccessoriesPage.appendChild(newDiv);
    }


    for(let i=1;i<30;i++){
        let newDiv= document.createElement('div');
        newDiv.classList.add('item');
       newDiv.innerHTML = `
       <img src="image/${products[i].image}">
       <div class="title">${products[i].name}</div>
             <div class="price">${products[i].price.toLocaleString()} MMK</div>
             <button onclick="addToCard(${i})">Order</button>
       `;
       showoily.appendChild(newDiv);
    }


    for(let i=30;i<60;i++){
        let newDiv= document.createElement('div');
        newDiv.classList.add('item');
       newDiv.innerHTML = `
       <img src="image/${products[i].image}">
       <div class="title">${products[i].name}</div>
             <div class="price">${products[i].price.toLocaleString()} MMK</div>
             <button onclick="addToCard(${i})">Order</button>
       `;
       shownormal.appendChild(newDiv);
    }


    for(let i=60;i<90;i++){
        let newDiv= document.createElement('div');
        newDiv.classList.add('item');
       newDiv.innerHTML = `
       <img src="image/${products[i].image}">
       <div class="title">${products[i].name}</div>
             <div class="price">${products[i].price.toLocaleString()} MMK</div>
             <button onclick="addToCard(${i})">Order</button>
       `;
       showcombination.appendChild(newDiv);
    }


    for(let i=90;i<120;i++){
        let newDiv= document.createElement('div');
        newDiv.classList.add('item');
       newDiv.innerHTML = `
       <img src="image/${products[i].image}">
       <div class="title">${products[i].name}</div>
             <div class="price">${products[i].price.toLocaleString()} MMK</div>
             <button onclick="addToCard(${i})">Order</button>
       `;
       showsensitive.appendChild(newDiv);
    }


    for(let i=120;i<150;i++){
        let newDiv= document.createElement('div');
        newDiv.classList.add('item');
       newDiv.innerHTML = `
       <img src="image/${products[i].image}">
       <div class="title">${products[i].name}</div>
             <div class="price">${products[i].price.toLocaleString()} MMK</div>
             <button onclick="addToCard(${i})">Order</button>

    `;
   
       showdry.appendChild(newDiv);
    }



    for(let i=150;i<197;i++){
        console.log(i);
        let newDiv= document.createElement('div');
        newDiv.classList.add('item');
       newDiv.innerHTML = `
       <img src="image/${products[i].image}">
       <div class="title">${products[i].name}</div>
             <div class="price">${products[i].price.toLocaleString()} MMK</div>
             
             <button onclick="addToCard(${i})">Order</button>

    `;
   
       showaccessories.appendChild(newDiv);
    }
}



initApp();




var ord=[];

function addToCard(key){
  
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
        
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    let discout=0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    if(totalPrice<100000)
    total.innerText = totalPrice.toLocaleString();
    else
    {
       discout =totalPrice*0.05;
       totalPrice=totalPrice-discout;
        total.innerText = totalPrice.toLocaleString();
    }
    quantity.innerText = count;

    filteredArray = listCards.filter(item => item !== undefined);
    console.log(filteredArray);
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}







// Hide Function

var ClickOily=document.getElementById("oilyclick");
ClickOily.onclick=function(){
  AllSkinDiv.classList.add("hide");
  ListNormal.classList.add("hide");
  ListCombination.classList.add("hide");
  ListSensitive.classList.add("hide");
  ListOily.classList.remove("hide");
  ListAccessories.classList.add("hide");
  ListDry.classList.add("hide");

  
};

var ClickNormal=document.getElementById("normalclick");
ClickNormal.onclick=function(){
    AllSkinDiv.classList.add("hide");
    ListNormal.classList.remove("hide");
    ListCombination.classList.add("hide");
    ListSensitive.classList.add("hide");
    ListOily.classList.add("hide");
    ListDry.classList.add("hide");
    ListAccessories.classList.add("hide");
  
};



var ClickCombination=document.getElementById("combinationclick");
ClickCombination.onclick=function(){
    AllSkinDiv.classList.add("hide");
    ListNormal.classList.add("hide");
    ListCombination.classList.remove("hide");
    ListSensitive.classList.add("hide");
    ListOily.classList.add("hide");
    ListAccessories.classList.add("hide");
    ListDry.classList.add("hide");
  
};




var ClickSensitive=document.getElementById("sensitiveclick");
ClickSensitive.onclick=function(){
    AllSkinDiv.classList.add("hide");
    ListNormal.classList.add("hide");
    ListCombination.classList.add("hide");
    ListDry.classList.add("hide");
    ListAccessories.classList.add("hide");
    ListSensitive.classList.remove("hide");
    ListOily.classList.add("hide");
   

  
};


var ClickDry=document.getElementById("dryclick");
ClickDry.onclick=function(){
    AllSkinDiv.classList.add("hide");
    ListNormal.classList.add("hide");
    ListCombination.classList.add("hide");
    ListSensitive.classList.add("hide");
    ListOily.classList.add("hide");
    ListAccessories.classList.add("hide");
    ListDry.classList.remove("hide");


  
};




var ClickAccessories=document.getElementById("accessoriesclick");
ClickAccessories.onclick=function(){
    AllSkinDiv.classList.add("hide");
    ListNormal.classList.add("hide");
    ListCombination.classList.add("hide");
    ListSensitive.classList.add("hide");
    ListOily.classList.add("hide");
    ListDry.classList.add("hide");
    ListAccessories.classList.remove("hide");


  
};

function order(){

    
    var username = sessionStorage.getItem("username");
    var phone = sessionStorage.getItem("phone");
    var address = sessionStorage.getItem("address");

    

    var filteredArrayString = JSON.stringify(filteredArray);
    var encodedArray = encodeURIComponent(filteredArrayString);

    // Redirect to the next page with the encoded array in the URL
    window.location.href = "ord.html?data=" + encodedArray;



}



function proceedToOrder() {
    // Redirect to the order page
    window.location.href = "order.html";
}

