interface Data {
    value: number,
    format: Intl.NumberFormat
};

export class Component {
    toView(data: Data): JQuery {
        return jQuery('<span/>')
            .addClass('numeric')
            .append(data.format.format(data.value));
    }

};
