class MultipleChoice {
    constructor(MultipleChoiceDiv) {
        this.MultipleChoice = MultipleChoiceDiv;
    }

    Initialize() {
        // hide all the alt texts
        let AltTexts = this.MultipleChoice.getElementsByClassName("altText");
        this.HideAllAltText(AltTexts);

        //click functionality
        let buttons = this.MultipleChoice.getElementsByClassName("choice");
        this.ClickerFunction(buttons);
    }

    ClickerFunction(buttons) {
        for (var index = 0; index < buttons.length; index++) {
            let button = buttons[index];

            button.addEventListener("click", () => {
                let right = button.classList.contains("right");
                let wrong = button.classList.contains("wrong");

                if (right) {
                    this.CorrectChoice(button);
                }else if (wrong) {
                    this.WrongChoice(button);
                }

                button.style.backgroundColor = "black";
                this.ShowAltText(button);
            })
        }
    }

    CorrectChoice(button) {
        button.style.color = "#66ff00";
        button.style.textShadow = "0px 2px 0px black";
    }

    WrongChoice(button) {
        button.style.color = "red";
        button.style.textShadow = "0px 2px 0px black";
    }

    ShowAltText(button) {
        let AltText = button.getElementsByClassName("altText")[0];
        AltText.style.display = "initial";
    }

    HideAllAltText(AltTexts) {
        for (var index = 0; index < AltTexts.length; index++) {
            let AltText = AltTexts[index];
            AltText.style.display = "none";
        }
    }
}

let MultipleChoiceDivs = document.getElementsByClassName("multipleChoice");

for (var index = 0; index < MultipleChoiceDivs.length; index++) {
    let MultipleChoiceDiv = MultipleChoiceDivs[index];
    let MultipleChoiceObject = new MultipleChoice(MultipleChoiceDiv);
    MultipleChoiceObject.Initialize();
}