// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IFlowViewMapping } from "./../api/IFlowViewMapping";
import { FlowManager } from "./FlowManager";

export class FlowViewMapping implements IFlowViewMapping {

    private _event: string;
    public get event(): string {
        return this._event;
    }
    private _flowManager: FlowManager;
    public get flowManager(): FlowManager {
        return this._flowManager;
    }

    constructor(event: string, flowManager: FlowManager) {
        this._event = event;
        this._flowManager = flowManager;
    }

    public toFloatingView(viewClass: any): void {
        this._flowManager.mapFloatingView(this._event, viewClass);
    }

    public toView(viewClass: any): void {
        this._flowManager.mapView(this._event, viewClass);
    }
}
