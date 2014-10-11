var UI = require('ui');

var main = new UI.Card({
  title: 'CircumP',
  subtitle: 'CircumPebble',
  icon: 'images/circum.png',
  body: 'Premi select per vedere le prossime partenze'
});

main.show();

main.on('click', 'select', function(e) {

    
  var menu = new UI.Menu();
  menu.item(0, 0, { title: "Prossime", subtitle: 'partenze' });
  menu.item(0, 1, { title: "NULL", subtitle: 'Non disp' });
  menu.item(0, 2, { title: "NULL", subtitle: 'Non disp' });
  menu.item(0, 3, { title: "NULL", subtitle: 'Non disp' });
  menu.item(0, 4, { title: "NULL", subtitle: 'Non disp' });
  menu.item(0, 5, { title: "NULL", subtitle: 'Non disp' });
  var ajax = require('ajax');
ajax({ url: 'http://students.uniparthenope.it/~0124000464/pebble/dati.php', type: 'json' },
  function(data) {
    if (data.uno.bin==" "){
      menu.item(0, 1, { title: data.uno.dest, subtitle:  data.uno.ora + " Binario: N.D."});
    }
    else{
    menu.item(0, 1, { title: data.uno.dest, subtitle:  data.uno.ora + " Binario: "+ data.uno.bin });
    }
    if (data.due.bin==" "){
    menu.item(0, 2, { title: data.due.dest, subtitle:  data.due.ora + " Binario: N.D."});
    }
    else{
    menu.item(0, 2, { title: data.due.dest, subtitle:  data.due.ora + " Binario: "+ data.due.bin });
    }
    if(data.tre.bin ==" "){
      menu.item(0, 3, { title: data.tre.dest, subtitle:  data.tre.ora + " Binario: N.D."});
    }
    else{
      menu.item(0, 3, { title: data.tre.dest, subtitle:  data.tre.ora + " Binario: "+ data.tre.bin });
    }
    if(data.quattro.bin ==" "){
       menu.item(0, 4, { title: data.quattro.dest, subtitle:  data.quattro.ora + " Binario: N.D."});
    }
    else{
       menu.item(0, 4, { title: data.quattro.dest, subtitle:  data.quattro.ora + " Binario: "+ data.quattro.bin});

    }
   if(data.cinque.bin ==" "){
         menu.item(0, 5, { title: data.cinque.dest, subtitle: data.cinque.ora + " Binario: N.D." });
   }
    else{
        menu.item(0, 5, { title: data.cinque.dest, subtitle: data.cinque.ora + " Binario: "+ data.cinque.bin });  
    }

  });
  menu.show();
});
  


