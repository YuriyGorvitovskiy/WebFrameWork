interface Data {
    name: string,
    url: string,
    target: string
};

export class Component {
    toView(data: Data): JQuery {
        return jQuery('<a/>')
            .addClass('link')
            .attr('href', data.url)
            .attr('target', data.target)
            .append(data.name);
    }

};
