import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
    selector:'app-dialogue',
    templateUrl:'./dialogue.component.html'
})

export class DialogueComponent{


    constructor(private dialog:MatDialog) {}

    close()
    {
        this.dialog.closeAll();
    }


}