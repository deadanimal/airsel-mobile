import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultipleRetaggingPage } from './multiple-retagging.page';

describe('MultipleRetaggingPage', () => {
  let component: MultipleRetaggingPage;
  let fixture: ComponentFixture<MultipleRetaggingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleRetaggingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleRetaggingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
