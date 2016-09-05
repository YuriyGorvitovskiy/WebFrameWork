interface Data {
    value: boolean
};

export class Component {
    toView(data: Data): JQuery {
        return jQuery('<input/>')
            .addClass('checkbox')
            .attr('type', 'checkbox')
            .attr('checked', data.value ? "checked" : null);
    }

};
