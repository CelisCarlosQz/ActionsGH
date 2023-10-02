describe('AppComponent', () => {
    let person: any;
    let result: any;

    /* given() - Dado */
    beforeEach(() => {
        person = { userId: 1 }
    });
    /* when() -  Cuando */
    beforeEach(() => {
        result = getPersonName(person);
    });
    /* Then() - Entonces */
    it('Deberia Volver el Nombre Completo', () => {
        expect(result).toBe('Carlos');
    });
})

function getPersonName(person: any) {
    switch(person.userId)
    {
        case 1:
            return 'Carlos';
    }
    return 'Andres';
}