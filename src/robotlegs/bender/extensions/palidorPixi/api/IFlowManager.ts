// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IFlowViewMapping } from "./IFlowViewMapping";

export let IFlowManager = Symbol("IFlowManager");
export interface IFlowManager {
    map(event: string): IFlowViewMapping;
}
