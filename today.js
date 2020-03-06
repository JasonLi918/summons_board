<script>
var startday = new Date(2020,2,7);
var today = new Date();

var cal = parseInt((today-startday)/1000/24/60/60);

if(cal%5 == 0){
  console.log("light");
}else if(cal%5 == 1){
  console.log("fire");
}else if(cal%5 == 2){
  console.log("wood");
}else if(cal%5 == 3){
  console.log("dark");
}else if(cal%5 == 4){
  console.log("water");
}

// 3月7號 光屬
// 3月8號 火屬
// 3月9號 木屬
// 3月10號 暗屬
// 3月11號 水屬
</script>