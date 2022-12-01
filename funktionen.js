/* DATENSTRUKTUREN */

console.log( "\u001b[33m---Primitives--------------------------" );
/* Primitives */
    // let a // (var) Definition oder Deklaration
    // Wertzuweisung / Assignment
    let a;
    a = 10;
    console.log( "\t\u001b[32m" + typeof a );
    console.log( "\t\u001b[32m" + a );

console.log( "\u001b[33m---Arrays--------------------------" );
/* Arrays */
    // Navigation über INDEX
    /* Array -Info, nicht klausurrelevant*/
    let arr;    // arr = new Array();  // Möglichkeit
    arr = [ "Test1", "Test2", "Test3", "Test4" ];
    console.log( "\t\u001b[32m" + typeof arr );
    console.log( "\t\u001b[32m" + arr );
    console.log( "\t\u001b[32m" + arr[ 1 ] );
    console.log( "\t\u001b[32m" + arr[ arr.length - 1 ] );

console.log( "\u001b[33m---Daten-Objekte--------------------------" );
/* Daten-Objekte */
    // Navigation über Bezeichner (keys)
    let obj = { x: "Hi", y: 10 };
    console.log( "\t\u001b[32m" + typeof arr );
    console.log( "\t\u001b[32m" + obj );
    console.log( "\t\u001b[32m" + obj.x );
    console.log( "\t\u001b[32m" + obj.y );

    obj = {             // nested object
        obj1: 10,
        obj2: {
            val1: 5,
            val2: "Huhu"
        }
    }
    console.log( "\t\u001b[32m" + obj.obj1 );
    console.log( "\t\u001b[32m" + obj.obj2.val2 );

console.log( "\u001b[33m---DOM--------------------------" );
/*DOM Document Object Model*/
    console.log( "\t\u001b[32m" + document );
    console.log( "\t\u001b[32m" + document.body );
    console.log( "\t\u001b[32m" + document.body.children );
    console.log( "\t\u001b[32m" + document.body.children[ 0 ] );
    console.log( "\t\u001b[32m" + document.body.children[ 0 ].innerHTML );
    document.body.children[ 0 ].innerText = "Hi";
    console.log( "\t\u001b[32m" + document.getElementById( "test" ) );
    document.getElementById( "test" ).innerHTML = "Hallo Text!"

console.log( "\u001b[33m---ENTSCHEIDUNGSSTRUKTUREN--------------------------" );
/* ENTSCHEIDUNGSSTRUKTUREN | CONTROL FLOW*/
    let cond;

    cond = true;
    cond = ( 6 > 4 );
    cond = ( 6 < 4 );
    cond = ( 4 != 4 );        // Test auf ungleichem Wert
    cond = ( 4 == 4 );        // Test auf Wert
    cond = ( 4 === "4" );     // Test auf Wert UND Typ

    if ( cond ) {
        console.log( "\t\u001b[32m" + "Aussage wahr" );
    } else {
        console.log( "\t\u001b[32m" + "Aussage falsch" );
    }

    switch ( cond ) {
        case true:
            console.log( "\t\u001b[32m" + "Aussage wahr" );
            break;
        case false:
            console.log( "\t\u001b[32m" + "Aussage falsch" );
            break;
        default:
            console.log( "\t\u001b[32m" + "Aussage nicht conform" );
            break;
    }

 console.log( "\u001b[33m---FUNKTIONEN--------------------------" );
 /* FUNKTIONEN */
    // 3. Parameter 
        console.log( "\t\u001b[32m" + test3( "Robert" ) );              // Argument(e)
        function test3( firstName ) {                                   // Parameter
            // do something ...
            return "Hallo, " + firstName;
        }

    // 4. Fkt-Call aus Funktionen
        console.log( "\t\u001b[32m" + test4( "Herbert" ) );             // Argument(e)
        function test4( firstName ) {                                   // Parameter
            return grussformel() + firstName;
            // return firstName + grussformel() ; 
        }
        function grussformel() {
            return "Hallo, ";
        }

        // rechner();

    console.log( "\u001b[33m---Ende--------------------------" );
