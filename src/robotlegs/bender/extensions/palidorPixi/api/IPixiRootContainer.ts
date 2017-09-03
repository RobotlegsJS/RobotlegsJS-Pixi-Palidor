// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { Container } from "pixi.js";

export let IPixiRootContainer = Symbol("IPixiRootContainer");
export interface IPixiRootContainer {

    getRootContainer(): Container;
}
