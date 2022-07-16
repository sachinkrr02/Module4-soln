var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++)
 {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') 
    {
       GoodBye();
    }
    else
    {
        SpeakHello();
    }
 }

 function SpeakHello()
 {
    console.log("GoodBye " + names[i]);
 }
 function GoodBye()
 {
    console.log("Hello " + names[i]);
 }