function getShippingCost(country) {
    const ChinaShippingCost = 100;
    const ChileShippingCost = 250;
    const AustraliaShippingCost = 170;
    const JamaicaShippingCost = 120;

    switch (country) {
        case "China":
            return `Shipping to ${country} will cost ${ChinaShippingCost} credits`;
            break;
        case "Chile":
            return `Shipping to ${country} will cost ${ChileShippingCost} credits`;
            break;
        case "Australia":
            return `Shipping to ${country} will cost ${AustraliaShippingCost} credits`;
            break;
        case "Jamaica":
            return `Shipping to ${country} will cost ${JamaicaShippingCost} credits`;
            break;
        default:
            return "Sorry, there is no delivery to your country"
    }
    
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
