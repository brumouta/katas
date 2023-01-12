import {SmartFridge} from "./smart-fridge";


describe('Smart Fridge should', () => {

    let smartFridge: SmartFridge

    beforeEach(() => {
        smartFridge = new SmartFridge()
    });

    it('set current date', () => {
        let now: Date = new Date()

        smartFridge.currentDate = now

        expect(smartFridge.currentDate).toBe(now)


    });
});

