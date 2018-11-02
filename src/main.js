$( document ).ready( function() {

    random_Word = DICTIONARY[ Math.floor( Math.random() * DICTIONARY.length ) ].key;
    let party = new Party(random_Word);
    let letter = new Letter(random_Word);

    let life = 0;

    console.log(party.found_Word);

    console.log(letter.word);

    $("#button").on("click", function() {
        letter.checkLetter( $( "#letter" ).val().substr(0, 1) );

        $( "#letter" ).val("");
    });

    console.log(letter.life);
});