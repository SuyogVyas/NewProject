import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";


@Component({
    selector:'appdelete-dialogue',
    templateUrl:'./deleteDialogue.component.html'
})

export class DeleteDialogueComponent{


    constructor(private dialog:MatDialog) {}

    close()
    {
        this.dialog.closeAll();
    }


}