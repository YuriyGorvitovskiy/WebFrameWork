import * as Link from "../lib/link";

$('#demo-link')
    .append(new Link.Component().toView({
        name: "Google search",
        url: "http://google.com",
        target: "_blank"
    }));
