import {SmartFridge} from "./smart-fridge";


describe('Smart Fridge should', () =>{
    it('list items and expiration dates', () => {
        let smartFridge: SmartFridge = new SmartFridge()

        smartFridge.currentDate = new Date( 2021, 9, 18)

        smartFridge.signalFridgeDoorOpened()
        smartFridge.scanAddedItem("Milk", "21/10/21", "sealed")
        smartFridge.scanAddedItem("Cheese", "18/11/21", "sealed")
        smartFridge.scanAddedItem("Beef", "20/10/21", "sealed")
        smartFridge.scanAddedItem("Lettuce", "22/10/21", "sealed")
        smartFridge.signalFridgeDoorClosed()

        smartFridge.simulateDayOver()

        smartFridge.signalFridgeDoorOpened()
        smartFridge.signalFridgeDoorClosed()

        smartFridge.signalFridgeDoorOpened()
        smartFridge.signalFridgeDoorClosed()

        smartFridge.signalFridgeDoorOpened()
        smartFridge.scanRemovedItem("Milk")
        smartFridge.signalFridgeDoorClosed()

        smartFridge.signalFridgeDoorOpened()
        smartFridge.scanAddedItem("Milk", "26/10/21", "opened")
        smartFridge.scanAddedItem("Peppers", "23/10/21", "opened")
        smartFridge.signalFridgeDoorClosed()

        smartFridge.simulateDayOver()

        smartFridge.signalFridgeDoorOpened()
        smartFridge.scanRemovedItem("Beef")
        smartFridge.scanRemovedItem("Lettuce")
        smartFridge.signalFridgeDoorClosed()

        smartFridge.signalFridgeDoorOpened()
        smartFridge.scanAddedItem("Lettuce", "22/10/21", "opened")
        smartFridge.signalFridgeDoorClosed()

        smartFridge.signalFridgeDoorOpened()
        smartFridge.signalFridgeDoorClosed()

        smartFridge.simulateDayOver()

        expect(smartFridge.showDisplay()).toBe("EXPIRED: Milk\n" +
            "Lettuce: 0 days remaining\n" +
            "Peppers: 1 day remaining\n" +
            "Cheese: 31 days remaining")
    });
});

