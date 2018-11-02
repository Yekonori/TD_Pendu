class Letter {
    constructor(word, life) {
        this.word = word.split("");
        this.life = 0;

        for (let i = 0; i < word.length; i++) {
            $("#word").append(`<p class="hidden_letter" id="${ i+1 }">${ word[i] }</p>`);
        }

        $("#picture").append(`<img src="assets/${ this.life }.png" alt="PENDU" class="image">`);
    }

    checkLetter( get_Letter ) {
        let catchLetter = 0;

        for (let i = 0; i < this.word.length; i++) {
            if(get_Letter == this.word[i]) {
                $(`#${ i+1 }`).css( "color", "rgba(0, 0, 0, 1) !important" );
                $(`#${ i+1 }`).addClass("find_letter");

                catchLetter++;
            }
        }

        if(catchLetter == 0) {
            this.life += 1;

            this.renderImage();
        }
    }

    renderImage() {
        if( this.life < 12) {
            $(".image").attr("src", `assets/${ this.life }.png`);
        } else {
            location.reload();
        }
    }
}