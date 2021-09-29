export interface Lead {
    id: number;
    date: Date;
    place: string;
    rating: number;
    name: string;
    crag: string;
    zone: string;
    attempt: string;
    grade: string;
    style: string;
    comment: string;
}

export const mockLeads: Lead[] = [
    {
        id: 0,
        date: new Date(),
        place: 'Figeac',
        rating: 4,
        name: 'la bella bella',
        crag: 'Mont-Roc',
        zone: 'Secteur Est',
        attempt: '3',
        grade: '6b+',
        style: 'Overhang',
        comment: 'Bla bla bla'
    },
    {
        id: 1,
        date: new Date(),
        place: 'Auzat',
        rating: 4,
        name: 'la bob razowski',
        crag: 'Auzat',
        zone: 'Secteur Nord',
        attempt: '1',
        grade: '6a+',
        style: 'Slab',
        comment: 'Bla bla bla bla bla bla'
    }
];