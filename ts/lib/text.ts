
export class Component {

    toView(value: Object): String {
        return "<span class='text'>" + value["value"] + "</span>";
    }

}
