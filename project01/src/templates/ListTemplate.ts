import FullList from "../model/FullList";


interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList : FullList): void,
}



export default class ListTemplate implements DOMList {

    ul: HTMLUListElement

    static instance : ListTemplate = new ListTemplate();

    private constructor () {
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = "";
    }

    render(fullList: FullList): void {
        this.clear();

        fullList.list.forEach( list => {
            const li = document.createElement("li") as HTMLLIElement
            li.className = "item"

            const check = document.createElement("input") as HTMLInputElement
            check.type = "checkbox"
            check.id = list.id
            check.tabIndex = 0
            check.checked = list.checked

            li.append(check);

            check.addEventListener("change", () => {
                list.checked = !list.checked
                fullList.save();
            })

            const label = document.createElement("lable") as HTMLLabelElement
            label.htmlFor = list.id
            label.textContent = list.item
            
            li.append(label)

            const button = document.createElement("button") as HTMLButtonElement
            button.className = "button"
            button.textContent = "X"
            li.append(button)

            button.addEventListener("click", () => {
                fullList.removeItem(list.id)
                this.render(fullList);
            })

            this.ul.append(li);
        } )
    }
}