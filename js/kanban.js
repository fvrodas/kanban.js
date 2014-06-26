function Workspace(){
  this.card_counter=0;
  this.columns=[];
  //this.cards_number=[];
  this.init=function(){
    var workspace = document.createElement('div');
    workspace.setAttribute('id','workspace');
    workspace.setAttribute('name','workspace');
    document.body.appendChild(workspace);
  };
  this.get_name=function(){
    for (var name in this.global) 
      if (this.global[name] == this) 
        return name;
  }
  this.add_column=function(stName,stWorkspace){
   var workspace = document.getElementById('workspace');
   var newColumn = document.createElement('div');
   newColumn.setAttribute('id',stName);
   newColumn.setAttribute('name',stName);
   newColumn.setAttribute('class','k_columns');
   newColumn.setAttribute('ondrop',stWorkspace+'.drop(event)');
   newColumn.setAttribute('ondragover',stWorkspace+'.allowDrop(event)');
   newColumn.innerHTML='<h2>'+stName+'</h2>';
   workspace.appendChild(newColumn);
   this.columns.push(stName);
  };
  this.add_card_to_column=function(stColumnName,newCard){
    var column = document.getElementById(stColumnName);
    //this.cards_number.push(this.card_counter);
    column.appendChild(newCard.get_card());
    this.card_counter++;
  };
  this.allowDrop= function (ev){
    ev.preventDefault();
  };
  this.drag=function (ev){
   ev.dataTransfer.setData("Text",ev.target.id);
  };
  this.drop=function (ev){
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
  };
  this.remove_card=function(iCardNum){
    for(var i=0;i<=this.columns.length;i++){
       var d = document.getElementById(this.columns[i]);
       var card = document.getElementById(iCardNum);
       try{
         console.log('remove '+iCardNum);
         d.removeChild(card);
       }catch(e){
         console.log(e.message);
       }
    }
    this.card_counter--;
  };
}
Workspace.prototype.global = this;
function Card(stTitle,stContent,iCardNum,stWorkspace){
  this.stTitle=stTitle;
  this.stContent=stContent;
  this.iCardNUm=iCardNum;
  this.LOW ="card normal-color";
  this.MID ="card mid-color";
  this.HIGH ="card high-color";
  this.stPrior= this.LOW;
  this.get_card=function(){
    var newCard = document.createElement('div');
    var cardIdName = 'card'+iCardNum;
    if (stTitle==='') stTitle='Task Card ';
    newCard.setAttribute('id',cardIdName);
    newCard.setAttribute('class',this.stPrior);
    newCard.setAttribute('draggable','true');
    newCard.setAttribute('ondragstart',stWorkspace+'.drag(event)');
    newCard.setAttribute('style','z-index:'+this.z_index+';top:'+this.top+'px;left:'+this.left+'px;');
    newCard.innerHTML = '<div>'+stTitle+' #'+iCardNum+'.  <a href=\'#\'  onclick=\''+stWorkspace+'.remove_card("'+cardIdName+'")\'>'
    +'<i class="fa fa-trash-o"></i></a></div><br>'+stContent;
    return newCard;
  };
  this.destroy=function(stColumnName,iCardNum){
    var d = document.getElementById(stColumnName);
    var card = document.getElementById(iCardNum);
    try{
      d.removeChild(card);
    }catch(e){
      console.log(e.message);
    }
  };
}

