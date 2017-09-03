import "./../../../../../entry";

import { PalidorEvent } from "../../../../../../src";

import { assert } from "chai";
import { Event } from "@robotlegsjs/core";

describe("PalidorEvent", () => {
    describe("constants", () => {
        it("should exist events to remove Views and FloatingViews", () => {
            assert.exists(PalidorEvent.REMOVE_CURRENT_VIEW);
            assert.exists(PalidorEvent.REMOVE_ALL_FLOATING_VIEWS);
            assert.exists(PalidorEvent.REMOVE_LAST_FLOATING_VIEW_ADDED);
        });
    });

    it("should extend from Event (@robotlegsjs/core)", () => {
        let event: Event = new PalidorEvent("event");
        assert.instanceOf(event, Event);
    });
});
