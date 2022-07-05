interface Person {
    name: string;
    age: number | string;
    [propName: string]: string | number;
}
interface Human {
    readonly company: string;
    name: string;
    age?: number;
    [propname: string]: any;
}
const tom1: Human = {
    company: 'zego',
    name: 'as',
    gender: 'male',
};

tom1.company = 'tencnet';

export const tom: Person = {
    name: 'tom',
    age: 21,
    adress: 'nanshanqu',
};
