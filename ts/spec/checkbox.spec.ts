import * as Checkbox from "../lib/checkbox";

describe('Checkbox component tests', () => {

    beforeEach(() => $('#test-dom').empty());

    it('Renders to: <input class="checkbox" type="checkbox" checked="checked">', () => {
        var element = new Checkbox.Component().toView({
            value: true
        });
        expect('<input class="checkbox" type="checkbox" checked="checked">')
            .toEqual($('#test-dom').append(element).html());
    });

    it('Renders to: <input class="checkbox" type="checkbox">', () => {
        var element = new Checkbox.Component().toView({
            value: false
        });
        expect('<input class="checkbox" type="checkbox">')
            .toEqual($('#test-dom').append(element).html());
    });
});
