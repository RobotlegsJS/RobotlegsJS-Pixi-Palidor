import "./../../../../../entry";

import sinon = require("sinon");
import { assert } from "chai";
import { EventMap } from "../support/EventMap";

import { FlowViewMapping } from "./../../../../../../src/robotlegs/bender/extensions/palidorPixi/impl/FlowViewMapping";
import { FlowManager } from "./../../../../../../src/robotlegs/bender/extensions/palidorPixi/impl/FlowManager";

describe("FlowViwMapping", () => {

    let flowManager: FlowManager;
    let flowViewMapping: FlowViewMapping;
    let event: string;
    let view: any;

    beforeEach(() => {
        event = "Event";
        view = { name: "view" };
        flowManager = new FlowManager();
        flowManager.eventMap = new EventMap();
        flowViewMapping = new FlowViewMapping("event", flowManager);
    });

    afterEach(() => {
        event = "";
        view = {};
        flowManager = new FlowManager();
        flowViewMapping = new FlowViewMapping("event", flowManager);
    });

    context("constructor", () => {
        it("should store the params", () => {
            flowViewMapping = new FlowViewMapping(event, flowManager);
            assert.equal(flowViewMapping.event, event);
            assert.equal(flowViewMapping.flowManager, flowManager);
        });
    });

    context("mapping a view", () => {
        it("should invoke mapFloatingView when the method toFloatingView is called", () => {
            let spy = sinon.spy(flowViewMapping.flowManager, "mapFloatingView");
            flowViewMapping.toFloatingView(view);

            assert.isTrue(spy.calledOnce);
        });

        it("should invoke mapFloatingView with the params: event and view", () => {
            let spy = sinon.spy(flowViewMapping.flowManager, "mapFloatingView");
            flowViewMapping.toFloatingView(view);

            assert.equal(spy.args[0][0], flowViewMapping.event);
            assert.equal(spy.args[0][1], view);
        });

        it("should invoke mapView when the method toView is called", () => {
            let spy = sinon.spy(flowViewMapping.flowManager, "mapView");
            flowViewMapping.toView(view);

            assert.isTrue(spy.calledOnce);
        });

        it("should invoke mapView with the params: event and view", () => {
            let spy = sinon.spy(flowViewMapping.flowManager, "mapView");
            flowViewMapping.toView(view);

            assert.equal(spy.args[0][0], flowViewMapping.event);
            assert.equal(spy.args[0][1], view);
        });
    });

});
