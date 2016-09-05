import * as Numeric from "../lib/numeric";

describe('Numeric component tests', () => {

    beforeEach(() => $('#test-dom').empty());

    it('en-US locale renders to: <span class="numeric">$1,234,567.90</span> ', () => {
        var element = new Numeric.Component().toView({
            value: 1234567.89987,
            format: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
        });
        expect('<span class="numeric">$1,234,567.90</span>')
            .toEqual($('#test-dom').append(element).html());
    });

    it('de-DE locale renders to: <span class="numeric">1.234.567,90 €</span> ', () => {
        var element = new Numeric.Component().toView({
            value: 1234567.89987,
            format: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })
        });
        expect('<span class="numeric">1.234.567,90&nbsp;€</span>')
            .toEqual($('#test-dom').append(element).html());
    });

    it('ru-RU locale renders to: <span class="numeric">1 234 567.90 \u20BD</span> ', () => {
        var element = new Numeric.Component().toView({
            value: 1234567.89987,
            format: new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' })
        });
        expect('<span class="numeric">1&nbsp;234&nbsp;567,90&nbsp;\u20BD</span>')
            .toEqual($('#test-dom').append(element).html());
    });
});
