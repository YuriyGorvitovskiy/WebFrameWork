import * as Text from "../lib/text";

$('#demo-text')
    .append(new Text.Component().toView({
        value: "Some text to display"
    }));
