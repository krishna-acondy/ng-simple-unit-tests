import { Type, Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

export class TestHarness<T> {
  constructor(public component: T, public fixture: ComponentFixture<Component>) { }

  get hasComponentCreated() {
    return !!this.component;
  }

  detectChanges() {
    this.fixture.detectChanges();
  }
}

export function setupTestModule<T>(moduleType: Type<T>, providers: any[] = []) {
  return TestBed.configureTestingModule({
    imports: [
      moduleType
    ],
    providers: providers
  })
  .compileComponents();
}

export function createTestHarness<T>(componentType: Type<T>): TestHarness<T> {
  let component: T;
  let fixture: ComponentFixture<T>;

  fixture = TestBed.createComponent<T>(componentType);
  component = fixture.componentInstance;
  fixture.detectChanges();

  return new TestHarness<T>(component, fixture);
}
