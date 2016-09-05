import * as Text from "../lib/text";

describe('Text component tests', () => {

    beforeEach(() => $('#test-dom').empty());

    it('Renders to: <span class="text">Some text to display</span>', () => {
        var element = new Text.Component().toView({
            value: "Some text to display"
        });
        expect('<span class="text">Some text to display</span>')
            .toEqual($('#test-dom').append(element).html());
    });
});
