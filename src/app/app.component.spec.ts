import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular');
  });

});

describe('Form', () => {
  let person: any;
  let result: any;

  /* given() - Dado */
  beforeEach(() => {
      person = { userId: 3 }
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