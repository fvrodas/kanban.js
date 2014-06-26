kanban.js
=========

A javascript library for a simple html5 kanban board.

Usage
=========

Without jQuery:
```
<script>
     //Set a Workspace object
     var nw = new Workspace();
     
     window.onload=function(){
     
       //Initizalize and create a Workspace DIV
       nw.init();
       
       //Add a column to the Workspace
       nw.add_column('NewColumn',nw.get_name());
       
       // Creates a new Card
       var myCard = new Card('New Card Title','New Task',nw.card_counter,nw.get_name());
       
       //Add the new Card to a initial Column
        nw.add_card_to_column('NewColumn',myCard);
     };
     
</script>
```

With jQuery:
```
<script>
     //Set a Workspace object
     var nw = new Workspace();
     
     $(document).ready=function(){
     
       //Initizalize and create a Workspace DIV
       nw.init();
       
       //Add a column to the Workspace
       nw.add_column('NewColumn',nw.get_name());
       
       // Creates a new Card
       var myCard = new Card('New Card Title','New Task',nw.card_counter,nw.get_name());
       
       //Add the new Card to a initial Column
        nw.add_card_to_column('NewColumn',myCard);
     };
     
</script>
```
