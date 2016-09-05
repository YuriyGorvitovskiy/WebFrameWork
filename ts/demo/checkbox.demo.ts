import * as Checkbox from "../lib/checkbox";

$('#demo-checkbox')
    .append(new Checkbox.Component().toView({
        value: true
    }))
    .append(new Checkbox.Component().toView({
        value: false
    }));
