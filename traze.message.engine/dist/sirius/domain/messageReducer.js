"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageReducer = ({
    reduce: (template) => {
        switch (template) {
            case 'malfunction':
                return `The train has experienced a technical malfunction. 
						Expect some delays of the arrival of your train at your respective station. 
						Sorry for the inconvenience.`;
            case 'delay':
                return `Expect some delays of the arrival of your train at your 
						respective station due to train congestion. 
						Sorry for the inconvenience. `;
            case 'power_failure':
                return `The train has stopped the operation due to power failure. 
						Kindly leave the platform orderly.  Sorry for the inconvenience.`;
            case 'near_station':
                return `1 more stations ahead before your designated station. Thank you for your patience.`;
            case 'crowd':
                return `The crowd traffic in doroteo jose station is in {condition}. Kindly plan your travel ahead.`;
            case 'accident':
                return `Please expect some delay of train arrival at your respective station
						due to accident in a relay. Please bear with us. Thank you`;
            case 'suspension':
                return `Please expect some delay of train arrival at your respective station
						due to train suspension. Please bear with us. Thank you`;
            case 'arrival':
                return `You're now on your destination. Thank you for travelling with us`;
            case 'pre_arrival':
                return `2 more station ahead before Doroteo Jose Station.`;
        }
    }
});
//# sourceMappingURL=messageReducer.js.map