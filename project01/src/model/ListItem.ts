export interface Item {
    id: string,
    item: string,
    checked: boolean
}

export default class ListItem implements Item {
    constructor (
        private _id: string = "",
        private _item: string = "",
        private _checked: boolean = false
    ) {

    }

    get id(): string {
        return this._id
    } 

    set id(ID: string) {
        this._id = ID
    }
    
    get item(): string {
        return this._item
    } 

    set item(item: string) {
        this._item = item
    }

    get checked(): boolean {
        return this._checked
    } 

    set checked(checked) {
        this._checked = checked
    }
}