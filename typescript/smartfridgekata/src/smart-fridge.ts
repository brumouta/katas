export class SmartFridge {

    private _currentDate: Date = new Date()

    signalFridgeDoorOpened(): void {
        throw Error("Unsupported Operation")
    }

    signalFridgeDoorClosed(): void {
        throw Error("Unsupported Operation")
    }

    scanAddedItem(name: string, expiry: string, condition: string): void {
        //add timestamp
        throw Error("Unsupported Operation")
    }

    scanRemovedItem(name: string): void {
        throw Error("Unsupported Operation")
    }

    simulateDayOver(): void {
        throw Error("Unsupported Operation")
    }

    showDisplay(): void {
        throw Error("Unsupported Operation")
    }

    //getters and setters

    get currentDate(): Date {
        return this._currentDate;
    }

    set currentDate(value: Date) {
        this._currentDate = value;
    }

}