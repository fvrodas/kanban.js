kanban.js
=========

A javascript library for a simple html5 kanban board.

Usage
=========

Add this to your HTML document
```
<!-- It use Font Awesome for some icons -->
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">

<link href="kanban.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="kanban.js"></script>
```


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

I'm using Font Awesome for some icons, so if you want to use it check this url: 
http://fortawesome.github.io/Font-Awesome/
