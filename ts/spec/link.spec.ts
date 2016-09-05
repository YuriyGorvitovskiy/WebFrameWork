import * as Link from "../lib/link";

describe('Link component tests', () => {

    beforeEach(() => $('#test-dom').empty());

    it('Renders to: <a class="link" href="http://google.com" target="_blank">Google search</a>', () => {
        var element = new Link.Component().toView({
            name: "Google search",
            url: "http://google.com",
            target: "_blank"
        });
        expect('<a class="link" href="http://google.com" target="_blank">Google search</a>')
            .toEqual($('#test-dom').append(element).html());
    });
});
