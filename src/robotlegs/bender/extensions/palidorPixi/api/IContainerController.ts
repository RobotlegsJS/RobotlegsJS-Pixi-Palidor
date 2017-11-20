// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { Container } from "pixi.js";

export let IContainerController = Symbol("IContainerController");
export interface IContainerController {
    addView(view: Container): void;

    changeView(view: Container): void;

    removeCurrentView(): void;

    removeLastFloatingViewAdded(): void;

    removeAllFloatingViews(): void;
}
