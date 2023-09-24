type TariffList = {//описание списка оплачиваемых услуг с ценой
    [name: string]: number
};

interface ServiceProvided {// Описание сущности оказанной услуги
    name: string,
    qty: number
}

const tariffList: TariffList = { // Список оплачиваемых услуг
    "уборка": 500,
    "стирка": 750,
    "вынос мусора": 300
}

const serviceProvidedList: Array<ServiceProvided> = [//список оказанных услуг
    {
        name: "выгул собаки",
        qty: 1
    }, {
        name: "уборка",
        qty: 2
    }, {
        name: "вынос мусора",
        qty: 1
    }, {
        name: "покупка продуктов",
        qty: 3
    }
];

function calculate(serviceProvidedList: Array<ServiceProvided>, tariffList: TariffList): number { // калькулятор оплаты ЗП
    return serviceProvidedList
        .filter(
            (service) => tariffList[service.name] !== undefined)
        .map(
            (service) => service.qty * tariffList[service.name])
        .reduce(
            (previousValue, currentValue) => previousValue + currentValue)
}

console.log(
    calculate(serviceProvidedList, tariffList)//вызов расчёта в примере должно получиться 1300
)