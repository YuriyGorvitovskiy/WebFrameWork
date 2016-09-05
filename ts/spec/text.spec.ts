import * as Text from "../lib/text";

describe('Text component tests', () => {
    it('null is not the same thing as undefined', () =>
        expect("<span class='text'>Some text to display</span>")
            .toEqual(new Text.Component().toView({
                value: "Some text to display"
            }))
    );
});
