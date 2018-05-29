import { Event, injectable } from "@robotlegsjs/core";
import { Mediator } from "@robotlegsjs/pixi";

import { PalidorView } from "../views/PalidorView";

@injectable()
export class PalidorViewMediator extends Mediator<PalidorView> {
    public initialize(): void {
        this.eventMap.mapListener(this.view.setViewButton, "click", this.onSetView, this);
        this.eventMap.mapListener(this.view.addViewButton, "click", this.onAddView, this);
    }
    public destroy(): void {
        this.eventMap.unmapListeners();
    }
    private onSetView(e: any): void {
        this.eventDispatcher.dispatchEvent(new Event("robotlegsjsView"));
    }
    private onAddView(e: any): void {
        this.eventDispatcher.dispatchEvent(new Event("floatingView"));
    }
}
