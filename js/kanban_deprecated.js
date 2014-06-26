// It's a class that manage the cards in the kanban board
function card_manager(){
 this.LOW ="card normal-color";
 this.MID ="card mid-color";
 this.HIGH ="card high-color";
 this.z_index=0;
 this.top=150;
 this.left=200;
 this.init_board=function(){
   // 
 };
 this.add_column=function(stName){
   var workspace = document.getElementById('workspace');
   var newColumn = document.createElement('div');
   newColumn.setAttribute('id',stName);
   newColumn.setAttribute('name',stName);
   newColumn.setAttribute('class','k_columns');
   workspace.appendChild(newColumn);
 }; 
 this.create_card= function(stCardManager,title,content,prior){
  var to_do = document.getElementById('to_do');
  var num = this.z_index;
  var newCard = document.createElement('div');
  var cardIdName = 'card'+num;
  if (title==='') title='Task Card ';
  newCard.setAttribute('id',cardIdName);
  newCard.setAttribute('class',prior);
  newCard.setAttribute('draggable','true');
  newCard.setAttribute('ondragstart',stCardManager+'.drag(event)');
  newCard.setAttribute('style','z-index:'+this.z_index+';top:'+this.top+'px;left:'+this.left+'px;');
  newCard.innerHTML = '<div>'+title+' #'+num+'.  <a href=\'#\'  onclick=\''+stCardManager+'.remove_card("'+cardIdName+'")\'>'
  + '<i class="fa fa-trash-o"></i></a></div><br><br>'+content;
  to_do.appendChild(newCard);
  this.z_index++;
  this.top+=30;
  this.left-=10;
  
 };
  //In process
 this.lock_card=function(cardNum){
   //
 };
  //In process
 this.unlock_card=function(cardNum){
   //
 };
 this.remove_card=function(cardNum) {
  //$('#'+divNum).slideUp();
  var d = document.getElementById('to_do');
  var card = document.getElementById(cardNum);
  try{
    console.log('remove '+cardNum);
    d.removeChild(card);
  }catch(e){
    
  }
  try{
    d = document.getElementById('in_process');
    console.log('remove '+cardNum);
    d.removeChild(card);
  }catch(e){
    
  }
  try{
    d = document.getElementById('locked');
    console.log('remove '+cardNum);
    d.removeChild(card);
  }catch(e){
    
  }
  try{
    d = document.getElementById('done');
    console.log('remove '+cardNum);
    d.removeChild(card);
  }catch(e){
    
  }
  try{
    d = document.getElementById('delivered');
    console.log('remove '+cardNum);
    d.removeChild(card);
  }catch(e){
    
  }
  this.z_index--;
  this.top-=30;
  this.left+=10;
 };
 this.allowDrop= function (ev){
  ev.preventDefault();
 };
 this.drag=function (ev){
  ev.dataTransfer.setData("Text",ev.target.id);
 };
 this.drop=function (ev){
  ev.preventDefault();
  console.log(ev.clientX);
  var data=ev.dataTransfer.getData("Text");
  var card = document.getElementById(data);
  var z = data.substring(3);
  ev.target.appendChild(document.getElementById(data));
  card.setAttribute('style','z-index:'+z+';top:'+ev.clientY+'px;left:'+ev.clientX+'px;');
 };
}












