interface Data {
    value: string;
}
export class Component {

    toView(data: Data): JQuery {
        return jQuery('<span/>')
            .addClass('text')
            .append(data.value);
    }

}
