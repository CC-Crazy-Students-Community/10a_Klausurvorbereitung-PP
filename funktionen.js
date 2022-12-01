/* DATENSTRUKTUREN */

console.log( "---Primitives--------------------------" );
/* Primitives */
    // let a // (var) Definition oder Deklaration
    // Wertzuweisung / Assignment
    let a;
    a = 10;
    console.log( typeof a );
    console.log( a );

console.log( "---Arrays--------------------------" );
/* Arrays */
    // Navigation über INDEX
    /* Array -Info, nicht klausurrelevant*/
    let arr;    // arr = new Array();  // Möglichkeit
    arr = [ "Test1", "Test2", "Test3", "Test4" ];
    console.log( typeof arr );
    console.log( arr );
    console.log( arr[ 1 ] );
    console.log( arr[ arr.length - 1 ] );

console.log( "---Daten-Objekte--------------------------" );
/* Daten-Objekte */
    // Navigation über Bezeichner (keys)
    let obj = { x: "Hi", y: 10 };
    console.log( typeof arr );
    console.log( obj );
    console.log( obj.x );
    console.log( obj.y );

    obj = {             // nested object
        obj1: 10,
        obj2: {
            val1: 5,
            val2: "Huhu"
        }
    }
    console.log( obj.obj1 );
    console.log( obj.obj2.val2 );

console.log( "---DOM--------------------------" );
/*DOM Document Object Model*/
    console.log( document );
    console.log( document.body );
    console.log( document.body.children );
    console.log( document.body.children[ 0 ] );
    console.log( document.body.children[ 0 ].innerHTML );
    document.body.children[ 0 ].innerText = "Hi";
    console.log( document.getElementById( "test" ) );
    document.getElementById( "test" ).innerHTML = "Hallo Text!"

console.log( "---ENTSCHEIDUNGSSTRUKTUREN--------------------------" );
/* ENTSCHEIDUNGSSTRUKTUREN | CONTROL FLOW*/
    let cond;

    cond = true;
    cond = ( 6 > 4 );
    cond = ( 6 < 4 );
    cond = ( 4 != 4 );        // Test auf ungleichem Wert
    cond = ( 4 == 4 );        // Test auf Wert
    cond = ( 4 === "4" );     // Test auf Wert UND Typ

    if ( cond ) {
        console.log( "Aussage wahr" );
    } else {
        console.log( "Aussage falsch" );
    }

    switch ( cond ) {
        case true:
            console.log( "Aussage wahr" );
            break;
        case false:
            console.log( "Aussage falsch" );
            break;
        default:
            console.log( "Aussage nicht conform" );
            break;
    }

 console.log( "---FUNKTIONEN--------------------------" );
 /* FUNKTIONEN */
    // 3. Parameter 
        console.log( test3( "Robert" ) );               // Argument(e)
        function test3( firstName ) {                   // Parameter
            // do something ...
            return "Hallo, " + firstName;
        }

    // 4. Fkt-Call aus Funktionen
        console.log( test4( "Herbert" ) );              // Argument(e)
        function test4( firstName ) {                   // Parameter
            return grussformel() + firstName;
            // return firstName + grussformel() ; 
        }
        function grussformel() {
            return "Hallo, ";
        }

        // rechner();

    console.log( "---Ende--------------------------" );


