import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodosTestModule } from './todos.test.module';
import { setupTestModule, TestHarness, createTestHarness } from 'src/test/test-helpers';

describe('TodosComponent', () => {
  let testHarness: TestHarness<TodosComponent>;

  beforeEach(async () => {
    await setupTestModule(TodosTestModule);
    testHarness = createTestHarness(TodosComponent);
  });

  it('should create', () => {
    expect(testHarness.hasComponentCreated).toBeTruthy();
  });
});
