import * as Numeric from "../lib/numeric";

$('#demo-numeric-us')
    .append(new Numeric.Component().toView({
        value: 1234567.89987,
        format: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    }));

$('#demo-numeric-de')
    .append(new Numeric.Component().toView({
        value: 1234567.89987,
        format: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })
    }));

$('#demo-numeric-ru')
    .append(new Numeric.Component().toView({
        value: 1234567.89987,
        format: new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' })
    }));
