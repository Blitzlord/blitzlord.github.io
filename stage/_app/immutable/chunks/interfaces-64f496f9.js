var s=(e=>(e.Special="Special",e.Physical="Physical",e.Both="Both",e))(s||{}),r=(e=>(e.Random="Random",e.Default="Default",e.Event="Event",e))(r||{}),i=(e=>(e.Special="Special",e.Physical="Physical",e.Status="Status",e))(i||{}),n=(e=>(e.Normal="Normal",e.Fire="Fire",e.Water="Water",e.Electric="Electric",e.Grass="Grass",e.Ice="Ice",e.Fighting="Fighting",e.Poison="Poison",e.Ground="Ground",e.Flying="Flying",e.Psychic="Psychic",e.Bug="Bug",e.Rock="Rock",e.Ghost="Ghost",e.Dragon="Dragon",e.Dark="Dark",e.Steel="Steel",e.Fairy="Fairy",e))(n||{});const t=[{name:"Normal",immunities:["Ghost"],weaknesses:["Rock","Steel"],strengths:[]},{name:"Fire",immunities:[],weaknesses:["Fire","Water","Rock","Dragon"],strengths:["Grass","Ice","Bug","Steel"]},{name:"Water",immunities:[],weaknesses:["Water","Grass","Dragon"],strengths:["Fire","Ground","Rock"]},{name:"Electric",immunities:["Ground"],weaknesses:["Electric","Grass","Dragon"],strengths:["Water","Flying"]},{name:"Grass",immunities:[],weaknesses:["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],strengths:["Water","Ground","Rock"]},{name:"Ice",immunities:[],weaknesses:["Fire","Water","Ice","Steel"],strengths:["Grass","Ground","Flying","Dragon"]},{name:"Fighting",immunities:["Ghost"],weaknesses:["Poison","Flying","Psychic","Bug","Fairy"],strengths:["Normal","Ice","Rock","Dark","Steel"]},{name:"Poison",immunities:["Steel"],weaknesses:["Poison","Ground","Rock","Ghost"],strengths:["Grass","Fairy"]},{name:"Ground",immunities:["Flying"],weaknesses:["Grass","Bug"],strengths:["Fire","Electric","Poison","Rock","Steel"]},{name:"Flying",immunities:[],weaknesses:["Electric","Rock","Steel"],strengths:["Grass","Fighting","Bug"]},{name:"Psychic",immunities:["Dark"],weaknesses:["Psychic","Steel"],strengths:["Fighting","Poison"]},{name:"Bug",immunities:[],weaknesses:["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],strengths:["Grass","Psychic","Dark"]},{name:"Rock",immunities:[],weaknesses:["Fighting","Ground","Steel"],strengths:["Fire","Ice","Flying","Bug"]},{name:"Ghost",immunities:["Normal"],weaknesses:["Dark"],strengths:["Psychic","Ghost"]},{name:"Dragon",immunities:["Fairy"],weaknesses:["Steel"],strengths:["Dragon"]},{name:"Dark",immunities:[],weaknesses:["Fighting","Dark","Fairy"],strengths:["Psychic","Ghost"]},{name:"Steel",immunities:[],weaknesses:["Fire","Water","Electric","Steel"],strengths:["Ice","Rock","Fairy"]},{name:"Fairy",immunities:[],weaknesses:["Fire","Poison","Steel"],strengths:["Fighting","Dragon","Dark"]}],a={2:1,1:0,"0.5":-1,0:-2},o={12:"Extremely Good",11:"Extremely Good",10:"Extremely Good",9:"Extremely Good",8:"Extremely Good",7:"Extremely Good",6:"Extremely Good",5:"Extremely Good",4:"Very Good",3:"Very Good",2:"Very Good",1:"Good",0:"Neutral","-1":"Bad","-2":"Very Bad","-3":"Very Bad","-4":"Very Bad","-5":"Very Bad","-6":"Very Bad","-7":"Very Bad","-8":"Very Bad","-9":"Very Bad","-10":"Very Bad","-11":"Very Bad","-12":"Very Bad"};export{s as A,i as C,r as R,n as T,a as f,o as r,t};
